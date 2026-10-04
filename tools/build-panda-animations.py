"""Build stable, padded panda animation frames from generated sprite grids.

Every output frame uses the same 448px transparent canvas. The source cells
are kept at a constant scale and registered on the lower-body region. Both
axes use that registration: no per-frame centring or ground-line heuristic is
allowed to move the character while arms, props, or effects animate.
"""

from pathlib import Path
import shutil

import numpy as np
from PIL import Image
from scipy import ndimage, signal


ROOT = Path(__file__).resolve().parents[1]
SHEET_DIR = ROOT / "assets" / "panda" / "sheets"
FRAME_DIR = ROOT / "assets" / "panda" / "frames"
OUT_SIZE = 448
CONTENT_SCALE = 0.82

SHEETS = {
    "eating": (SHEET_DIR / "eating.png", 4, 4),
    "sleeping": (SHEET_DIR / "sleeping.png", 4, 2),
    "applauding": (SHEET_DIR / "applauding.png", 4, 2),
    "encouraging": (SHEET_DIR / "encouraging.png", 4, 2),
    "celebrating": (SHEET_DIR / "celebrating.png", 4, 2),
    "dancing": (SHEET_DIR / "dancing.png", 4, 2),
}


def remove_magenta(image: Image.Image) -> Image.Image:
    """Create a soft alpha matte from the generated pure-magenta backdrop."""
    arr = np.asarray(image.convert("RGBA"), dtype=np.float32)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    # Generated "flat" backgrounds contain slight compression/noise. Detect
    # magenta by chroma instead of exact RGB distance so that noise disappears
    # while pale-pink cheeks and pillow remain fully opaque.
    magenta = np.minimum(r, b) - g
    alpha = np.clip((160 - magenta) / 100, 0, 1) * 255
    # Remove the coloured fringe left in partially transparent edge pixels.
    edge = (alpha > 0) & (alpha < 250)
    r[edge] = np.minimum(r[edge], g[edge] + 40)
    b[edge] = np.minimum(b[edge], g[edge] + 40)
    arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3] = r, g, b, alpha
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA")


def split_grid(path: Path, columns: int, rows: int) -> list[Image.Image]:
    sheet = remove_magenta(Image.open(path))
    width, height = sheet.size
    frames = []
    for row in range(rows):
        for column in range(columns):
            left = round(column * width / columns)
            right = round((column + 1) * width / columns)
            top = round(row * height / rows)
            bottom = round((row + 1) * height / rows)
            frames.append(sheet.crop((left, top, right, bottom)))
    return frames


def anchor_mask(frame: Image.Image, mode: str) -> np.ndarray:
    arr = np.asarray(frame)
    alpha = arr[..., 3] > 80
    height, width = alpha.shape
    yy = np.arange(height)[:, None]

    if mode == "sleeping":
        # The pillow is the stable base and occupies the lower half.
        mask = alpha & (yy > height * 0.50)
    else:
        r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
        # Ignore green bamboo/confetti and upper moving arms; keep hips and feet.
        not_green = ~((g > r * 1.08) & (g > b * 1.08))
        mask = alpha & not_green & (yy > height * 0.57)

    return ndimage.binary_dilation(mask, iterations=2).astype(np.float32)


def registration_offsets(frames: list[Image.Image], mode: str) -> list[tuple[int, int]]:
    masks = [anchor_mask(frame, mode) for frame in frames]
    reference = masks[0]
    offsets = [(0, 0)]
    for mask in masks[1:]:
        correlation = signal.fftconvolve(reference, mask[::-1, ::-1], mode="full")
        peak_y, peak_x = np.unravel_index(np.argmax(correlation), correlation.shape)
        offsets.append((int(peak_x - mask.shape[1] + 1), int(peak_y - mask.shape[0] + 1)))
    return offsets


def normalize(frames: list[Image.Image], mode: str) -> list[Image.Image]:
    offsets = registration_offsets(frames, mode)
    cell_width = max(frame.width for frame in frames)
    cell_height = max(frame.height for frame in frames)
    scale = min(OUT_SIZE * CONTENT_SCALE / cell_width, OUT_SIZE * CONTENT_SCALE / cell_height)
    resized_frames = [
        frame.resize(
            (round(frame.width * scale), round(frame.height * scale)),
            Image.Resampling.LANCZOS,
        )
        for frame in frames
    ]
    # Recalculate at final resolution instead of scaling/rounding offsets found
    # on the source grid. This keeps the registered lower body pixel-locked.
    scaled_offsets = registration_offsets(resized_frames, mode)

    # Work out one shared translation from the union of every registered
    # silhouette. Individual frames never receive an additional centring
    # correction: the lower body therefore remains at one fixed coordinate.
    registered_bounds = []
    for resized, (dx, dy) in zip(resized_frames, scaled_offsets):
        alpha = np.asarray(resized)[..., 3] > 8
        rows, columns = np.where(alpha)
        if len(rows):
            registered_bounds.append((columns.min() + dx, rows.min() + dy, columns.max() + dx, rows.max() + dy))

    min_x = min(bound[0] for bound in registered_bounds)
    min_y = min(bound[1] for bound in registered_bounds)
    max_x = max(bound[2] for bound in registered_bounds)
    max_y = max(bound[3] for bound in registered_bounds)
    union_width = max_x - min_x + 1
    union_height = max_y - min_y + 1
    base_x = (OUT_SIZE - union_width) // 2 - min_x
    base_y = (OUT_SIZE - union_height) // 2 - min_y

    normalized = []
    for resized, (dx, dy) in zip(resized_frames, scaled_offsets):
        canvas = Image.new("RGBA", (OUT_SIZE, OUT_SIZE), (0, 0, 0, 0))
        canvas.alpha_composite(resized, (base_x + dx, base_y + dy))
        normalized.append(canvas)

    # Eliminate the last one- or two-pixel discrepancy introduced by image
    # resampling. There is ample transparent padding, so this cannot crop art.
    pixel_locked = normalized
    for _ in range(6):
        final_offsets = registration_offsets(pixel_locked, mode)
        if all(dx == 0 and dy == 0 for dx, dy in final_offsets):
            break
        corrected = []
        for canvas, (dx, dy) in zip(pixel_locked, final_offsets):
            locked = Image.new("RGBA", (OUT_SIZE, OUT_SIZE), (0, 0, 0, 0))
            locked.alpha_composite(canvas, (dx, dy))
            corrected.append(locked)
        pixel_locked = corrected

    return pixel_locked


def build() -> None:
    FRAME_DIR.mkdir(parents=True, exist_ok=True)
    for stale in FRAME_DIR.glob("*.png"):
        stale.unlink()

    for name, (path, columns, rows) in SHEETS.items():
        frames = normalize(split_grid(path, columns, rows), name)
        for index, frame in enumerate(frames):
            frame.save(FRAME_DIR / f"{name}-{index:02d}.png", optimize=True)
        print(f"{name}: {len(frames)} stable {OUT_SIZE}x{OUT_SIZE} frames")

    # Keep the historically named source sheets synchronized for anyone who
    # opens them directly while working on the mascot.
    shutil.copy2(SHEET_DIR / "eating.png", ROOT / "assets" / "panda" / "panda-eating-bamboo.png")
    shutil.copy2(SHEET_DIR / "sleeping.png", ROOT / "assets" / "panda" / "panda-sleeping.png")


if __name__ == "__main__":
    build()
