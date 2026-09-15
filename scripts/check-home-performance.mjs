import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
// Desde 2026-09-15 la portada es la tienda y el antiguo portal vive en /directorio/.
// Las dos páginas largas difieren el render de sus módulos fuera de pantalla.
const paginas = [
  { ruta: 'index.html', minimo: 10 },
  { ruta: join('directorio', 'index.html'), minimo: 6 },
];
const css = readdirSync(join(dist, '_astro'), { recursive: true })
  .filter((file) => file.endsWith('.css'))
  .map((file) => readFileSync(join(dist, '_astro', file), 'utf8'))
  .join('')
  .replace(/\s+/g, '');

for (const { ruta, minimo } of paginas) {
  const html = readFileSync(join(dist, ruta), 'utf8');
  const secciones = html.match(/class="[^"]*home-deferred-section[^"]*"/g) ?? [];
  if (secciones.length < minimo) {
    throw new Error(`Se esperaban al menos ${minimo} secciones diferibles en /${ruta}; se encontraron ${secciones.length}.`);
  }
}

const deferredRule = /\.home-deferred-section\{[^}]*\}/.exec(css)?.[0] ?? '';
if (!/content-visibility:auto/.test(deferredRule)) {
  throw new Error('Las secciones diferibles no posponen su renderizado fuera del viewport.');
}

if (!/contain-intrinsic-size:auto900px/.test(deferredRule)) {
  throw new Error('Las secciones diferibles no reservan espacio para evitar CLS.');
}

console.log('HOME PERFORMANCE: portada y /directorio/ con secciones diferidas y reserva de espacio.');
