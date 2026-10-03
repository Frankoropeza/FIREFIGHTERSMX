#!/usr/bin/env python3
"""Deriva los activos de INPROSEG FIRE desde el arte original del propietario.

El JPEG fuente no se versiona: `_docs/brand/inproseg-fire-original.jpg` está
ignorado intencionalmente. Ejecutar este script desde la raíz del repositorio.
"""

from __future__ import annotations

import base64
from collections import deque
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "_docs/brand/inproseg-fire-original.jpg"
OUT = ROOT / "public"
BRAND = OUT / "brand"
FUZZ = 20  # ~8 % de 255; sólo afecta blancos conectados al borde.


def is_background(pixel: tuple[int, int, int]) -> bool:
    """Acepta el blanco roto del JPEG de fondo, no los blancos encerrados."""
    return max(pixel) - min(pixel) < FUZZ and min(pixel) >= 255 - FUZZ


def remove_connected_background(image: Image.Image) -> Image.Image:
    """Hace transparente sólo el blanco conectado a cualquiera de las esquinas."""
    rgb = image.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()
    background = bytearray(width * height)
    queue: deque[tuple[int, int]] = deque()
    for point in ((0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)):
        x, y = point
        if is_background(pixels[x, y]):
            background[y * width + x] = 1
            queue.append(point)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height:
                index = ny * width + nx
                if not background[index] and is_background(pixels[nx, ny]):
                    background[index] = 1
                    queue.append((nx, ny))

    alpha = Image.new("L", rgb.size, 255)
    alpha.putdata([0 if value else 255 for value in background])
    # Suavizado mínimo: elimina el borde duro y evita el halo blanco del JPEG.
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.55))
    result = rgb.convert("RGBA")
    result.putalpha(alpha)
    return result


def crop_with_margin(image: Image.Image, bbox: tuple[int, int, int, int], margin: int = 3) -> Image.Image:
    left, top, right, bottom = bbox
    return image.crop((max(0, left - margin), max(0, top - margin), min(image.width, right + margin), min(image.height, bottom + margin)))


def separate_pieces(image: Image.Image) -> tuple[Image.Image, Image.Image]:
    """Separa escudo y wordmark mediante componentes conectados de la máscara alpha."""
    alpha = image.getchannel("A")
    width, height = image.size
    pixels = alpha.load()
    seen = bytearray(width * height)
    components: list[tuple[list[tuple[int, int]], tuple[int, int, int, int], tuple[float, float]]] = []
    for y in range(height):
        for x in range(width):
            index = y * width + x
            if seen[index] or pixels[x, y] < 64:
                continue
            queue: deque[tuple[int, int]] = deque([(x, y)])
            seen[index] = 1
            points: list[tuple[int, int]] = []
            left = right = x
            top = bottom = y
            while queue:
                px, py = queue.popleft()
                points.append((px, py))
                left, right = min(left, px), max(right, px)
                top, bottom = min(top, py), max(bottom, py)
                for nx, ny in ((px - 1, py - 1), (px, py - 1), (px + 1, py - 1), (px - 1, py), (px + 1, py), (px - 1, py + 1), (px, py + 1), (px + 1, py + 1)):
                    if 0 <= nx < width and 0 <= ny < height:
                        neighbor = ny * width + nx
                        if not seen[neighbor] and pixels[nx, ny] >= 64:
                            seen[neighbor] = 1
                            queue.append((nx, ny))
            if len(points) > 30:
                center_x = sum(point[0] for point in points) / len(points)
                center_y = sum(point[1] for point in points) / len(points)
                components.append((points, (left, top, right + 1, bottom + 1), (center_x, center_y)))

    # Rango real del escudo en el arte original: x≈320–930; su punta termina en y≈790.
    # El ® (x≈1175–1215, y≈765–800) queda por tanto con el wordmark aunque esté alto.
    symbol_components = [component for component in components if 320 <= component[2][0] <= 930 and component[2][1] <= 790]
    wordmark_components = [component for component in components if component not in symbol_components]
    if not symbol_components or not wordmark_components:
        raise RuntimeError("La clasificación por componentes no produjo símbolo y wordmark.")

    def piece(selected: list[tuple[list[tuple[int, int]], tuple[int, int, int, int], tuple[float, float]]]) -> Image.Image:
        mask = Image.new("L", image.size)
        mask_pixels = mask.load()
        boxes = []
        for points, bbox, _ in selected:
            boxes.append(bbox)
            for px, py in points:
                mask_pixels[px, py] = pixels[px, py]
        left = min(box[0] for box in boxes)
        top = min(box[1] for box in boxes)
        right = max(box[2] for box in boxes)
        bottom = max(box[3] for box in boxes)
        output = image.copy()
        output.putalpha(mask)
        return crop_with_margin(output, (left, top, right, bottom))

    return piece(symbol_components), piece(wordmark_components)


def fit_height(image: Image.Image, height: int) -> Image.Image:
    width = round(image.width * height / image.height)
    return image.resize((width, height), Image.Resampling.LANCZOS)


def horizontal(symbol: Image.Image, wordmark: Image.Image, dark: bool = False) -> tuple[Image.Image, int]:
    symbol = fit_height(symbol, 700)
    wordmark = fit_height(wordmark, round(symbol.height * 0.66))
    if dark:
        wordmark = dark_wordmark(wordmark)
        symbol = dark_symbol(symbol)
    gap = round(wordmark.width * 0.08)
    padding = 3
    canvas = Image.new("RGBA", (symbol.width + gap + wordmark.width + padding * 2, max(symbol.height, wordmark.height) + padding * 2))
    canvas.alpha_composite(symbol, (padding, (canvas.height - symbol.height) // 2))
    canvas.alpha_composite(wordmark, (padding + symbol.width + gap, (canvas.height - wordmark.height) // 2))
    return canvas, gap


def remove_bottom_side_artifacts(symbol: Image.Image) -> Image.Image:
    """Elimina residuos de componentes que caerían bajo el escudo, si existieran."""
    output = symbol.copy()
    alpha = output.getchannel("A")
    pixels = alpha.load()
    bottom_start = round(output.height * 0.94)
    center_left, center_right = output.width // 3, -(-output.width * 2 // 3)
    for y in range(bottom_start, output.height):
        for x in range(output.width):
            if not center_left <= x < center_right:
                pixels[x, y] = 0
    output.putalpha(alpha)
    return output


def validate_pieces(symbol: Image.Image, wordmark: Image.Image, gap: int, horizontal_image: Image.Image) -> None:
    """Gates contra la tira bajo el escudo y la pérdida del ®."""
    ratio = symbol.width / symbol.height
    if not 0.80 <= ratio <= 0.95:
        raise RuntimeError(f"Símbolo fuera de proporción: {ratio:.3f}")
    alpha = symbol.getchannel("A")
    bottom_start = round(symbol.height * 0.94)
    center_left, center_right = symbol.width // 3, -(-symbol.width * 2 // 3)
    leaking = any(alpha.getpixel((x, y)) > 32 for y in range(bottom_start, symbol.height) for x in range(symbol.width) if not center_left <= x < center_right)
    if leaking:
        raise RuntimeError("El símbolo conserva píxeles inferiores fuera del tercio central.")
    mark_alpha = wordmark.getchannel("A")
    corner_left = round(wordmark.width * 0.95)
    corner_bottom = round(wordmark.height * 0.15)
    has_registered = any(mark_alpha.getpixel((x, y)) > 32 for y in range(corner_bottom) for x in range(corner_left, wordmark.width))
    if not has_registered:
        raise RuntimeError("El wordmark no conserva píxeles del ® en su esquina superior derecha.")
    print(f"VALIDACIÓN símbolo: {symbol.width}x{symbol.height}, proporción {ratio:.3f}, tira inferior: no")
    print("VALIDACIÓN wordmark: ® detectado en esquina superior derecha")
    print(f"VALIDACIÓN gap: {round(gap * 240 / horizontal_image.height)} px a h240")


def low_saturation_dark(pixel: tuple[int, int, int, int]) -> bool:
    red, green, blue, alpha = pixel
    return alpha > 0 and max(red, green, blue) - min(red, green, blue) < 40 and max(red, green, blue) < 140


def dark_wordmark(image: Image.Image) -> Image.Image:
    """Aclara letras y líneas neutras, preservando íntegramente los rojos."""
    output = image.copy()
    data = []
    for pixel in output.getdata():
        red, green, blue, alpha = pixel
        if low_saturation_dark(pixel):
            data.append((255, 255, 255, alpha))
        else:
            data.append(pixel)
    output.putdata(data)
    return output


def dark_symbol(image: Image.Image) -> Image.Image:
    """Aclara sólo la parte neutra oscura del escudo para un fondo #0A0A0A."""
    output = image.copy()
    data = []
    for pixel in output.getdata():
        red, green, blue, alpha = pixel
        if low_saturation_dark(pixel):
            data.append((203, 213, 225, alpha))
        else:
            data.append(pixel)
    output.putdata(data)
    return output


def save_logo(image: Image.Image, stem: str) -> None:
    for height in (120, 240):
        resized = fit_height(image, height)
        resized.save(BRAND / f"{stem}-h{height}.webp", "WEBP", quality=90, method=6)
    # PNG de respaldo @2x solicitado.
    fit_height(image, 240).save(BRAND / f"{stem}-h240.png", "PNG", optimize=True)


def icon_square(symbol: Image.Image, size: int, white_background: bool = False) -> Image.Image:
    pad = round(size * 0.06)
    fitted = symbol.copy()
    scale = min((size - pad * 2) / fitted.width, (size - pad * 2) / fitted.height)
    fitted = fitted.resize((round(fitted.width * scale), round(fitted.height * scale)), Image.Resampling.LANCZOS)
    background = (255, 255, 255, 255) if white_background else (0, 0, 0, 0)
    output = Image.new("RGBA", (size, size), background)
    output.alpha_composite(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2))
    return output


def write_svg_icon(symbol: Image.Image, filename: str) -> None:
    icon = icon_square(symbol, 64)
    buffer = BytesIO()
    icon.save(buffer, "PNG", optimize=True)
    encoded = base64.b64encode(buffer.getvalue()).decode("ascii")
    (OUT / filename).write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img">'
        '<title>INPROSEG FIRE</title>'
        f'<image width="64" height="64" href="data:image/png;base64,{encoded}"/>'
        '</svg>\n',
        encoding="utf-8",
    )


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"No existe el arte original: {SOURCE}")
    BRAND.mkdir(parents=True, exist_ok=True)
    original = remove_connected_background(Image.open(SOURCE))
    symbol, wordmark = separate_pieces(original)
    symbol = remove_bottom_side_artifacts(symbol)

    # Vertical transparente para futuros usos, limitado a 1024 px.
    vertical = original.copy()
    vertical.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
    vertical.save(BRAND / "inproseg-fire-original-trans.png", "PNG", optimize=True)

    light, gap = horizontal(symbol, wordmark)
    dark, _ = horizontal(symbol, wordmark, dark=True)
    validate_pieces(symbol, wordmark, gap, light)
    save_logo(light, "inproseg-fire-horizontal")
    save_logo(dark, "inproseg-fire-horizontal-dark")
    icon_square(symbol, 512).save(BRAND / "inproseg-fire-simbolo-512.png", "PNG", optimize=True)

    icon_square(symbol, 16).save(OUT / "favicon-16x16.png", "PNG", optimize=True)
    icon_square(symbol, 32).save(OUT / "favicon-32x32.png", "PNG", optimize=True)
    icon_square(symbol, 32).save(OUT / "favicon.png", "PNG", optimize=True)
    icon_square(symbol, 180, white_background=True).save(OUT / "apple-touch-icon.png", "PNG", optimize=True)
    icon_square(symbol, 192).save(OUT / "icon-192.png", "PNG", optimize=True)
    icon_square(symbol, 512).save(OUT / "icon-512.png", "PNG", optimize=True)
    icon_square(symbol, 512).save(OUT / "icon.png", "PNG", optimize=True)
    icon_square(symbol, 512).save(OUT / "icon.avif", "AVIF", quality=90)
    icon_square(symbol, 48).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    write_svg_icon(symbol, "icon.svg")
    write_svg_icon(symbol, "favicon.svg")


if __name__ == "__main__":
    main()
