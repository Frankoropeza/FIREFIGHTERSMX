import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const lineTemplatePath = path.join(src, 'pages/empresas/[giro]/[estado]/[slug]/[linea].astro');

const astroFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = path.join(directory, entry.name);
  if (entry.isDirectory()) return astroFiles(fullPath);
  return entry.isFile() && entry.name.endsWith('.astro') ? [fullPath] : [];
});

test('los títulos de las páginas de línea usan tinta sobre el fondo claro', () => {
  const source = readFileSync(lineTemplatePath, 'utf8');
  assert.match(source, /const h2s = 'color:var\(--c-ink\);font-size:/);
  assert.doesNotMatch(source, /const h2s = 'color:#(?:FFF|FFFFFF);/i);
});

test('todo título blanco declarado en Astro pertenece a una sección oscura', () => {
  const whiteHeading = /<h[1-6]\b[^>]*(?:color:\s*#(?:fff|ffffff)\b|text-white)[^>]*>/gi;

  for (const file of astroFiles(src)) {
    const source = readFileSync(file, 'utf8');
    for (const match of source.matchAll(whiteHeading)) {
      const sectionStart = source.lastIndexOf('<section', match.index);
      const sectionEnd = sectionStart === -1 ? -1 : source.indexOf('>', sectionStart);
      const sectionTag = sectionStart === -1 || sectionEnd === -1 ? '' : source.slice(sectionStart, sectionEnd + 1);

      assert.match(
        sectionTag,
        /background:\s*var\(--c-(?:accent|ink)\)/i,
        `${path.relative(root, file)} contiene un título blanco fuera de una sección oscura`,
      );
    }
  }
});
