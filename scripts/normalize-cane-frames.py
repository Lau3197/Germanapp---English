from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "assets" / "cane" / "keyed"
OUTPUT_DIR = ROOT / "assets" / "cane" / "frames"
FRAME_SIZE = 256
TARGET_SLOT_WIDTH = 180
BASELINE_Y = 236
ALPHA_THRESHOLD = 10


def horizontal_runs(alpha: np.ndarray) -> list[tuple[int, int]]:
    occupied = (alpha > ALPHA_THRESHOLD).any(axis=0)
    runs: list[tuple[int, int]] = []
    start: int | None = None

    for index, value in enumerate(occupied):
        if value and start is None:
            start = index
        elif not value and start is not None:
            runs.append((start, index))
            start = None

    if start is not None:
        runs.append((start, len(occupied)))

    return runs


def normalize_strip(source_path: Path) -> dict[str, object]:
    image = Image.open(source_path).convert("RGBA")
    alpha = np.asarray(image.getchannel("A"))
    runs = horizontal_runs(alpha)

    if len(runs) < 8:
        raise ValueError(f"{source_path.name}: expected at least 8 isolated poses, found {len(runs)}")

    state_dir = OUTPUT_DIR / source_path.stem
    state_dir.mkdir(parents=True, exist_ok=True)
    poses: list[Image.Image] = []
    for left, right in runs:
        pose = image.crop((left, 0, right, image.height))
        bbox = pose.getchannel("A").getbbox()
        if bbox is None:
            raise ValueError(f"{source_path.name}: empty pose between columns {left}-{right}")
        poses.append(pose.crop(bbox))

    nominal_scale = TARGET_SLOT_WIDTH / (image.width / len(runs))
    max_pose_width = max(pose.width for pose in poses)
    max_pose_height = max(pose.height for pose in poses)
    safe_scale = min(
        (FRAME_SIZE - 24) / max_pose_width,
        (BASELINE_Y - 8) / max_pose_height,
    )
    scale = min(nominal_scale, safe_scale)
    frame_reports: list[dict[str, object]] = []

    for index, pose in enumerate(poses):
        resized_width = max(1, round(pose.width * scale))
        resized_height = max(1, round(pose.height * scale))
        pose = pose.resize((resized_width, resized_height), Image.Resampling.LANCZOS)

        if resized_width > FRAME_SIZE - 24 or resized_height > BASELINE_Y - 8:
            raise ValueError(
                f"{source_path.name}: frame {index} exceeds safe canvas "
                f"({resized_width}x{resized_height})"
            )

        x = round((FRAME_SIZE - resized_width) / 2)
        y = BASELINE_Y - resized_height
        frame = Image.new("RGBA", (FRAME_SIZE, FRAME_SIZE), (0, 0, 0, 0))
        frame.alpha_composite(pose, (x, y))
        output_path = state_dir / f"{source_path.stem}-{index:02d}.png"
        frame.save(output_path, optimize=True)

        final_bbox = frame.getchannel("A").getbbox()
        frame_reports.append({
            "frame": index,
            "bbox": final_bbox,
            "left_padding": final_bbox[0],
            "top_padding": final_bbox[1],
            "right_padding": FRAME_SIZE - final_bbox[2],
            "bottom_padding": FRAME_SIZE - final_bbox[3],
            "center_x": (final_bbox[0] + final_bbox[2]) / 2,
            "baseline": final_bbox[3],
        })

    return {
        "state": source_path.stem,
        "source_size": image.size,
        "scale": scale,
        "frames": frame_reports,
    }


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    reports = [normalize_strip(path) for path in sorted(SOURCE_DIR.glob("*.png"))]
    report_path = OUTPUT_DIR.parent / "frame-validation.json"
    report_path.write_text(json.dumps(reports, indent=2), encoding="utf-8")
    print(f"Wrote {sum(len(report['frames']) for report in reports)} normalized frames")
    print(f"Validation report: {report_path}")


if __name__ == "__main__":
    main()
