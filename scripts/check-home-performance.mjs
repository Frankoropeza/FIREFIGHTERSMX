import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const home = readFileSync(join(dist, 'index.html'), 'utf8');
const css = readdirSync(join(dist, '_astro'), { recursive: true })
  .filter((file) => file.endsWith('.css'))
  .map((file) => readFileSync(join(dist, '_astro', file), 'utf8'))
  .join('')
  .replace(/\s+/g, '');

const deferredSections = home.match(/class="[^"]*home-deferred-section[^"]*"/g) ?? [];
if (deferredSections.length !== 10) {
  throw new Error(`Se esperaban 10 secciones diferibles en el home; se encontraron ${deferredSections.length}.`);
}

const deferredRule = /\.home-deferred-section\{[^}]*\}/.exec(css)?.[0] ?? '';
if (!/content-visibility:auto/.test(deferredRule)) {
  throw new Error('Las secciones diferibles no posponen su renderizado fuera del viewport.');
}

if (!/contain-intrinsic-size:auto900px/.test(deferredRule)) {
  throw new Error('Las secciones diferibles no reservan espacio para evitar CLS.');
}

console.log('HOME PERFORMANCE: 10 secciones diferidas con reserva de espacio.');
