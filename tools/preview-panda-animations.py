"""Render contact sheets that expose padding and registration problems."""

from pathlib import Path
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
FRAME_DIR = ROOT / "assets" / "panda" / "frames"
PREVIEW_DIR = ROOT / "tmp" / "panda-animation-qa"
NAMES = ("eating", "sleeping", "applauding", "encouraging", "celebrating", "dancing")


def checker(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), "white")
    draw = ImageDraw.Draw(image)
    tile = 28
    for y in range(0, size, tile):
        for x in range(0, size, tile):
            if (x // tile + y // tile) % 2:
                draw.rectangle((x, y, x + tile - 1, y + tile - 1), fill="#eef1ee")
    # Safety zone: visible red line at 4% from every side.
    inset = round(size * 0.04)
    draw.rectangle((inset, inset, size - inset - 1, size - inset - 1), outline="#ef5386", width=2)
    return image


def main() -> None:
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    cell = 224
    for name in NAMES:
        frames = sorted(FRAME_DIR.glob(f"{name}-*.png"))
        columns = 4
        rows = (len(frames) + columns - 1) // columns
        sheet = Image.new("RGB", (columns * cell, rows * cell), "white")
        for index, path in enumerate(frames):
            frame = Image.open(path).convert("RGBA").resize((cell, cell), Image.Resampling.LANCZOS)
            base = checker(cell)
            base.alpha_composite(frame)
            sheet.paste(base.convert("RGB"), ((index % columns) * cell, (index // columns) * cell))
        sheet.save(PREVIEW_DIR / f"{name}-contact-sheet.png", optimize=True)
        print(PREVIEW_DIR / f"{name}-contact-sheet.png")


if __name__ == "__main__":
    main()
