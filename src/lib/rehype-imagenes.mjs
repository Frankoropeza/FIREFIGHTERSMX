/**
 * Rehype: optimiza las imágenes `![alt](/images/…avif)` del Markdown/MDX.
 *
 * Antes salían como `<img src alt>` pelado: sin width/height (salto de layout al
 * cargar), sin lazy-loading (todas descargadas de golpe) y sin srcset (1200 px
 * también en móvil). Aquí se añaden dimensiones reales leídas de la cabecera AVIF,
 * `loading="lazy"`, `decoding="async"` y `srcset` con las variantes -480/-768
 * que genera scripts/optimizar-imagenes.mjs.
 */
import { existsSync, openSync, readSync, closeSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC = join(process.cwd(), 'public');
const SIZES = '(min-width: 1024px) 760px, 100vw';
const cache = new Map();

function dimensiones(ruta) {
  if (cache.has(ruta)) return cache.get(ruta);
  let d = null;
  try {
    const fd = openSync(ruta, 'r');
    const buf = Buffer.alloc(4096);
    const n = readSync(fd, buf, 0, buf.length, 0);
    closeSync(fd);
    const i = buf.subarray(0, n).indexOf('ispe');
    if (i > 0) d = { w: buf.readUInt32BE(i + 8), h: buf.readUInt32BE(i + 12) };
  } catch {}
  cache.set(ruta, d);
  return d;
}

function recorrer(nodo, fn) {
  if (nodo.type === 'element') fn(nodo);
  for (const hijo of nodo.children ?? []) recorrer(hijo, fn);
}

export default function rehypeImagenes() {
  return (arbol) => {
    recorrer(arbol, (el) => {
      if (el.tagName !== 'img') return;
      const p = el.properties ?? (el.properties = {});
      const src = String(p.src ?? '');
      if (!src.startsWith('/images/') || !src.endsWith('.avif')) return;
      const dim = dimensiones(join(PUBLIC, src));
      if (dim) {
        p.width ??= dim.w;
        p.height ??= dim.h;
        const base = src.slice(0, -5);
        const set = [480, 768]
          .filter((w) => existsSync(join(PUBLIC, `${base}-${w}.avif`)))
          .map((w) => `${base}-${w}.avif ${w}w`);
        if (set.length) {
          p.srcSet = [...set, `${src} ${dim.w}w`].join(', ');
          p.sizes = SIZES;
        }
      }
      p.loading ??= 'lazy';
      p.decoding ??= 'async';
    });
  };
}
