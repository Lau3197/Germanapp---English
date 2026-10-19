"""Re-extract clean, aligned animation frames from the mascot spritesheets.

Bugs in the previous frames that this fixes:

1. Both source sheets ship a broken alpha channel (alpha == luminance), so the
   panda's black fur and outlines were already transparent before any cropping,
   which is why the sprite rendered washed out / see-through. Alpha is rebuilt
   from the green-screen key and the source alpha discarded.
2. Cells were located from a colour profile that splits on the subject itself;
   the panda grid is in fact exact (452px cells, 512px pitch, 30px inset), so it
   is hardcoded and asserted.
3. The artwork overflows its own cells, dropping stray fragments of the
   neighbouring frame into each sprite. Those blobs are removed.
4. Every frame of one animation now shares a single square crop box, so the
   subject stays anchored instead of jumping between frames.
"""

from PIL import Image
from scipy import ndimage
import numpy as np
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PANDA_OUT = os.path.join(ROOT, "assets/panda/frames")
DOG_OUT = os.path.join(ROOT, "assets/dog/frames")

CELL, PITCH, INSET = 452, 512, 30
KEY_LOW, KEY_HIGH = 30.0, 140.0  # greenness ramp: subject -> screen
OUT_SIZE = 384
COLOUR_BITS = 5  # the artwork is flat, so this halves the PNGs with no visible loss


def greenness(arr):
    return arr[..., 1].astype(np.float64) - np.maximum(arr[..., 0], arr[..., 2])


def chroma_key(cell):
    """Despilled green-screen key that rebuilds alpha and keeps blacks opaque."""
    arr = cell.astype(np.float64)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    gn = g - np.maximum(r, b)

    alpha = np.clip((KEY_HIGH - gn) / (KEY_HIGH - KEY_LOW), 0.0, 1.0) * 255.0
    g = np.where(gn > 12, np.minimum(g, np.maximum(r, b)), g)

    return np.clip(np.stack([r, g, b, alpha], axis=-1), 0, 255).astype(np.uint8)


def drop_bleed(cell, edges, min_share=0.02):
    """Drop blobs bleeding in from a neighbouring cell.

    The largest blob is the subject; anything else running off one of `edges`
    belongs to the frame next door.
    """
    solid = cell[..., 3] > 40
    labels, count = ndimage.label(solid)
    if count == 0:
        return cell

    sizes = ndimage.sum(solid, labels, range(1, count + 1))
    main = int(np.argmax(sizes)) + 1

    strips = {"top": labels[0, :], "bottom": labels[-1, :],
              "left": labels[:, 0], "right": labels[:, -1]}
    bleeding = set()
    for edge in edges:
        bleeding |= set(np.unique(strips[edge])) - {0}

    keep = labels == main
    for label in range(1, count + 1):
        if label != main and label not in bleeding \
                and sizes[label - 1] > sizes[main - 1] * min_share:
            keep |= labels == label  # bamboo stalk, ball, loose paw

    cleaned = cell.copy()
    cleaned[..., 3] = np.where(keep, cell[..., 3], 0)
    return cleaned


def content_bbox(alpha, threshold=24):
    ys, xs = np.where(alpha > threshold)
    return (xs.min(), ys.min(), xs.max() + 1, ys.max() + 1) if len(ys) else None


def union_bbox(cells):
    boxes = [content_bbox(c[..., 3]) for c in cells]
    return (min(b[0] for b in boxes), min(b[1] for b in boxes),
            max(b[2] for b in boxes), max(b[3] for b in boxes))


def compose(cells, out_dir, prefix, margin=0.05, anchor="center", side=None):
    """Crop every frame with one shared square box and write them out."""
    left, top, right, bottom = union_bbox(cells)

    if side is None:
        side = int(round(max(right - left, bottom - top) * (1 + 2 * margin)))
    sx = int(round((left + right) / 2 - side / 2))
    if anchor == "bottom":
        sy = bottom + int(round(side * margin)) - side
    else:
        sy = int(round((top + bottom) / 2 - side / 2))

    os.makedirs(out_dir, exist_ok=True)
    for i, cell in enumerate(cells):
        h, w = cell.shape[:2]
        canvas = np.zeros((side, side, 4), dtype=np.uint8)
        x0, y0 = max(0, sx), max(0, sy)
        x1, y1 = min(w, sx + side), min(h, sy + side)
        canvas[y0 - sy:y1 - sy, x0 - sx:x1 - sx] = cell[y0:y1, x0:x1]

        frame = np.array(Image.fromarray(canvas).resize((OUT_SIZE, OUT_SIZE),
                                                        Image.LANCZOS))
        step = 1 << (8 - COLOUR_BITS)
        frame[..., :3] = np.clip(frame[..., :3] // step * step + step // 2, 0, 255)
        Image.fromarray(frame).save(os.path.join(out_dir, f"{prefix}-{i:02d}.png"),
                                    optimize=True)

    print(f"{prefix}: {len(cells)} frames, {side}px box at ({sx},{sy}), "
          f"content {right - left}x{bottom - top}")


def panda_cells(sheet_path, cols, rows, label):
    sheet = np.array(Image.open(os.path.join(ROOT, sheet_path)).convert("RGBA"))
    cells = []
    for ri in range(rows):
        for ci in range(cols):
            x0, y0 = INSET + PITCH * ci, INSET + PITCH * ri
            raw = sheet[y0:y0 + CELL, x0:x0 + CELL]
            assert greenness(raw)[2, 2] > 150, f"{label} r{ri}c{ci}: no green screen"
            cells.append(drop_bleed(chroma_key(raw), edges=("top",)))
    return cells


def dog(sheet_path, cols, rows, prefix):
    """The samoyed sheet is already keyed; it just needs splitting and cleaning."""
    sheet = np.array(Image.open(os.path.join(ROOT, sheet_path)).convert("RGBA"))
    h, w = sheet.shape[:2]
    cells = []
    for ri in range(rows):
        for ci in range(cols):
            x0, x1 = round(ci * w / cols), round((ci + 1) * w / cols)
            y0, y1 = round(ri * h / rows), round((ri + 1) * h / rows)
            cells.append(drop_bleed(sheet[y0:y1, x0:x1].copy(),
                                    edges=("left", "right"), min_share=0.005))
    compose(cells, DOG_OUT, prefix, margin=0.12)


if __name__ == "__main__":
    for out in (PANDA_OUT, DOG_OUT):
        if os.path.isdir(out):
            for stale in sorted(os.listdir(out)):
                os.remove(os.path.join(out, stale))
    # Both moods share one crop size so the panda keeps its scale and ground
    # line when the mood switches.
    moods = {
        "eating": panda_cells("assets/panda/panda-eating-bamboo.png", 4, 4, "eating"),
        "sleeping": panda_cells("assets/panda/panda-sleeping.png", 4, 2, "sleeping"),
    }
    # The source artwork clips the panda's paws at the bottom of every eating
    # cell (the sheet's gutters are empty, so there is nothing to recover). The
    # generous margin keeps that cut away from the sprite box edge, where it
    # would read as a rendering bug rather than as the drawing it is.
    margin = 0.14
    side = max(int(round(max(b[2] - b[0], b[3] - b[1]) * (1 + 2 * margin)))
               for b in (union_bbox(c) for c in moods.values()))
    for prefix, cells in moods.items():
        compose(cells, PANDA_OUT, prefix, margin=margin, anchor="bottom", side=side)

    dog("assets/samoyed-playing-fetch-spritesheet-16-frames-transparent.png", 8, 2, "fetch")
