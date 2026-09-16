import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';

const distArgument = process.argv[2];
if (!distArgument) {
  console.error('Uso: node scripts/verificar-interlinking.mjs <dist>');
  process.exit(1);
}

const dist = resolve(distArgument);
if (!existsSync(dist) || !statSync(dist).isDirectory()) {
  console.error(`DIST inexistente: ${dist}`);
  process.exit(1);
}

const normalizeRoute = (value) => {
  const raw = value.replace(/^https:\/\/firefighters\.mx(?=\/|$)/, '').split(/[?#]/)[0] || '/';
  return raw === '/' ? '/' : `/${raw.replace(/^\/+|\/+$/g, '')}/`;
};

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const full = join(directory, entry.name);
  if (entry.isDirectory()) return walk(full);
  return entry.name === 'index.html' ? [full] : [];
});

const routeFor = (file) => {
  const relativeFile = relative(dist, file);
  const folder = relativeFile === 'index.html' ? '' : relativeFile.replace(/\/index\.html$/, '');
  return folder ? `/${folder}/` : '/';
};

const redirectsPath = resolve('public/_redirects');
const redirects = new Map();
if (existsSync(redirectsPath)) {
  for (const line of readFileSync(redirectsPath, 'utf8').split('\n')) {
    const [from, to, status] = line.trim().split(/\s+/);
    if (from?.startsWith('/') && to?.startsWith('/') && /^30[12]$/.test(status ?? '')) redirects.set(normalizeRoute(from), normalizeRoute(to));
  }
}

const followRedirect = (route) => {
  const seen = new Set();
  let current = normalizeRoute(route);
  while (redirects.has(current) && !seen.has(current)) {
    seen.add(current);
    current = redirects.get(current);
  }
  return current;
};

const extractMain = (html) => html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0] ?? '';
const isStoreRoute = (route) => {
  if (['/', '/certificaciones/', '/licitaciones/'].includes(route)) return true;
  if (/^\/(productos|servicios|industrias|marcas)\//.test(route)) return true;
  return /^\/blog\//.test(route) && !/^\/blog\/(tag|categoria|pagina)\//.test(route);
};

const pages = new Map();
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  const route = routeFor(file);
  pages.set(route, { html, noindex: /<meta\b[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) });
}

const indexables = [...pages.entries()]
  .filter(([route, page]) => isStoreRoute(route) && !page.noindex)
  .map(([route]) => route);
const incoming = new Map(indexables.map((route) => [route, 0]));
const broken = new Set();

for (const [source, page] of pages) {
  const main = extractMain(page.html);
  for (const match of main.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href.startsWith('/') && !href.startsWith('https://firefighters.mx/')) continue;
    const target = followRedirect(normalizeRoute(href));
    if (!pages.has(target)) {
      if (isStoreRoute(source) && !page.noindex) broken.add(`${source} → ${target}`);
      continue;
    }
    if (target !== source && incoming.has(target)) incoming.set(target, incoming.get(target) + 1);
  }
}

const huerfanas = [...incoming.entries()].filter(([, count]) => count < 3);
for (const [route, count] of huerfanas) console.error(`HUÉRFANA (${count} entrantes): ${route}`);
for (const route of [...broken].sort()) console.error(`ENLACE ROTO: ${route}`);
console.log(`INTERLINKING: ${huerfanas.length} huérfanas · ${broken.size} enlaces rotos (${indexables.length} páginas revisadas)`);
process.exit(huerfanas.length || broken.size ? 1 : 0);
