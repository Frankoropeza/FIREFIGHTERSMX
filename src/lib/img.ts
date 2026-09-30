/**
 * Imágenes responsivas (AVIF) sin dependencias en tiempo de ejecución.
 *
 * `scripts/optimizar-imagenes.mjs` genera `<nombre>-480.avif` y `<nombre>-768.avif`
 * junto a cada original. Aquí se detectan (sólo las que existen en /public) y se
 * arma `srcset`/`sizes`; así el móvil descarga ~15-30 KB en vez de ~100 KB por
 * tarjeta. Si una imagen no tiene variantes, no se emite srcset (comportamiento
 * anterior, sin romper nada).
 */
import { existsSync, openSync, readSync, closeSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC = join(process.cwd(), 'public');
const VARIANTES = [480, 768] as const;
const anchoCache = new Map<string, number>();
const setCache = new Map<string, string | undefined>();

/** Ancho real del AVIF leyendo el box `ispe` de la cabecera (sin decodificar). */
function anchoAvif(ruta: string): number {
  const hit = anchoCache.get(ruta);
  if (hit !== undefined) return hit;
  let w = 0;
  try {
    const fd = openSync(ruta, 'r');
    const buf = Buffer.alloc(4096);
    const n = readSync(fd, buf, 0, buf.length, 0);
    closeSync(fd);
    const i = buf.subarray(0, n).indexOf('ispe');
    if (i > 0) w = buf.readUInt32BE(i + 8);
  } catch {}
  anchoCache.set(ruta, w);
  return w;
}

const esAvifLocal = (src?: string): src is string =>
  !!src && src.startsWith('/images/') && src.endsWith('.avif') && !/-(480|768)\.avif$/.test(src);

/** `srcset` con las variantes existentes + el original; `undefined` si no hay variantes. */
export function srcset(src?: string): string | undefined {
  if (!esAvifLocal(src)) return undefined;
  if (setCache.has(src)) return setCache.get(src);
  const original = anchoAvif(join(PUBLIC, src));
  const base = src.slice(0, -'.avif'.length);
  const partes: string[] = [];
  for (const w of VARIANTES) {
    if (existsSync(join(PUBLIC, `${base}-${w}.avif`))) partes.push(`${base}-${w}.avif ${w}w`);
  }
  const out = partes.length && original ? [...partes, `${src} ${original}w`].join(', ') : undefined;
  setCache.set(src, out);
  return out;
}

/** Atributos `srcset` + `sizes` listos para propagar: `<img src={s} {...imgAttrs(s, SIZES.card3)} />`. */
export function imgAttrs(src: string | undefined, sizes: string): { srcset?: string; sizes?: string } {
  const s = srcset(src);
  return s ? { srcset: s, sizes } : {};
}

/** Valores de `sizes` según el ancho real que ocupa la imagen en cada layout. */
export const SIZES = {
  /** Tarjeta en rejilla de 1 → 2 → 3 columnas (contenedor ≈ 1200 px). */
  card3: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw',
  /** Tarjeta destacada del blog: mitad de ancho en escritorio. */
  half: '(min-width: 1024px) 600px, 100vw',
  /** Galería de 2 → 3 columnas. */
  gal: '(min-width: 1024px) 400px, (min-width: 768px) 33vw, 50vw',
  /** Imagen de Spotlight (columna de 2). */
  spot: '(min-width: 1024px) 560px, 100vw',
  /** Portada de artículo / imagen principal de ficha. */
  hero: '(min-width: 1024px) 800px, 100vw',
  /** A todo el ancho de la ventana. */
  full: '100vw',
  thumb48: '48px',
  thumb40: '40px',
} as const;
