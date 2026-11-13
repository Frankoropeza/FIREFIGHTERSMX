import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const lineTemplatePath = path.join(src, 'pages/empresas/[giro]/[estado]/[slug]/[linea].astro');
const packageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
const globalCss = readFileSync(path.join(src, 'styles/global.css'), 'utf8');

const htmlFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = path.join(directory, entry.name);
  if (entry.isDirectory()) return htmlFiles(fullPath);
  return entry.isFile() && entry.name.endsWith('.html') ? [fullPath] : [];
});

const cssVariables = new Map(
  [...globalCss.matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-f]{3,6})\b/gi)]
    .map(([, name, value]) => [name, value]),
);

const attribute = (node, name) => node.attrs?.find((item) => item.name === name)?.value ?? '';

const inlineStyles = (node) => new Map(
  attribute(node, 'style').split(';').flatMap((declaration) => {
    const separator = declaration.indexOf(':');
    if (separator === -1) return [];
    return [[declaration.slice(0, separator).trim(), declaration.slice(separator + 1).trim()]];
  }),
);

const resolveColor = (value) => {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  const variable = normalized.match(/^var\((--[\w-]+)\)$/);
  if (variable) return resolveColor(cssVariables.get(variable[1]));
  if (normalized === 'white') return [255, 255, 255];

  const hex = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1];
  if (hex) {
    const expanded = hex.length === 3 ? [...hex].map((digit) => digit.repeat(2)).join('') : hex;
    return [0, 2, 4].map((index) => Number.parseInt(expanded.slice(index, index + 2), 16));
  }

  const rgb = normalized.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return rgb ? rgb.slice(1).map(Number) : null;
};

const colorFromClass = (className, prefix) => className.split(/\s+/)
  .find((item) => item.startsWith(`${prefix}-[#`) && item.endsWith(']'))
  ?.slice(prefix.length + 2, -1);

const headingColor = (node) => {
  const declared = inlineStyles(node).get('color');
  if (declared) return resolveColor(declared);
  const className = attribute(node, 'class');
  if (className.split(/\s+/).includes('text-white')) return [255, 255, 255];
  return resolveColor(colorFromClass(className, 'text'));
};

const nearestBackground = (node) => {
  for (let current = node; current; current = current.parentNode) {
    const styles = inlineStyles(current);
    const declared = styles.get('background-color') ?? styles.get('background');
    const resolved = resolveColor(declared);
    if (resolved) return resolved;

    const className = attribute(current, 'class');
    if (className.split(/\s+/).includes('bg-white')) return [255, 255, 255];
    const classColor = resolveColor(colorFromClass(className, 'bg'));
    if (classColor) return classColor;
  }
  return [255, 255, 255];
};

const luminance = (rgb) => rgb
  .map((channel) => channel / 255)
  .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  .reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);

const contrastRatio = (foreground, background) => {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};

const auditHtml = (html, file = 'fixture') => {
  const issues = [];
  const visit = (node) => {
    if (/^h[1-6]$/.test(node.tagName ?? '')) {
      const foreground = headingColor(node);
      if (foreground) {
        const ratio = contrastRatio(foreground, nearestBackground(node));
        if (ratio < 4.5) issues.push(`${file}: <${node.tagName}> tiene contraste ${ratio.toFixed(2)}:1`);
      }
    }
    node.childNodes?.forEach(visit);
  };
  visit(parse(html));
  return issues;
};

test('los títulos de las páginas de línea usan tinta sobre el fondo claro', () => {
  const source = readFileSync(lineTemplatePath, 'utf8');
  assert.match(source, /const h2s = 'color:var\(--c-ink\);font-size:/);
  assert.doesNotMatch(source, /const h2s = 'color:#(?:FFF|FFFFFF);/i);
});

test('el build bloquea contrastes inválidos antes del despliegue', () => {
  assert.match(packageJson.scripts.build, /npm run test:heading-contrast/);
});

test('la auditoría usa la jerarquía real del DOM para detectar un título invisible', () => {
  const fixture = [
    '<section style="background:var(--c-accent)"></section>',
    '<section style="background:var(--c-bg-alt)"><h2 style="color:#FFFFFF">Invisible</h2></section>',
  ].join('');
  assert.equal(auditHtml(fixture).length, 1);
});

test('la auditoría acepta títulos blancos sobre el fondo de acento', () => {
  const fixture = '<section style="background:var(--c-accent)"><h2 style="color:#FFFFFF">Visible</h2></section>';
  assert.deepEqual(auditHtml(fixture), []);
});

test('todos los títulos con color explícito del sitio generado cumplen WCAG AA', () => {
  const files = htmlFiles(dist);
  assert.ok(files.length > 2500, `se esperaban más de 2500 páginas generadas; se encontraron ${files.length}`);

  const issues = files.flatMap((file) => auditHtml(
    readFileSync(file, 'utf8'),
    path.relative(root, file),
  ));
  assert.deepEqual(issues, []);
});
