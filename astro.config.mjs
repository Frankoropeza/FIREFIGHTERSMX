import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';

// ─── Sitemap lastmod dinámico ──────────────────────────────────────────────
// Resuelve URL → archivo fuente → fecha real (git log → mtime → omitir).
// Mejor omitir lastmod que mentir con la fecha del build.
// Requiere fetch-depth: 0 en el checkout del workflow para fechas git reales.
const ROOT = dirname(fileURLToPath(import.meta.url));
const _dateCache = new Map();

function sourceDate(relPath) {
  if (_dateCache.has(relPath)) return _dateCache.get(relPath);
  let date = null;
  const abs = join(ROOT, relPath);
  if (existsSync(abs)) {
    try {
      const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (out) date = new Date(out);
    } catch {}
    if (!date) {
      try {
        date = statSync(abs).mtime;
      } catch {}
    }
  }
  _dateCache.set(relPath, date);
  return date;
}

function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '');
  const rel = path === '' ? 'index' : path.replace(/^\//, '');
  const last = rel.split('/').pop() ?? rel;
  const candidates = [
    `src/pages/${rel}.astro`,
    `src/pages/${rel}/index.astro`,
    `src/pages/${rel}.md`,
    `src/pages/${rel}/index.md`,
  ];
  // Content collections: probar ruta completa bajo la colección y el slug final
  for (const col of ['blog', 'productos']) {
    const sub = rel.startsWith(`${col}/`) ? rel.slice(col.length + 1) : rel;
    for (const ext of ['md', 'mdx']) {
      candidates.push(`src/content/${col}/${sub}.${ext}`);
      candidates.push(`src/content/${col}/${sub}/index.${ext}`);
      candidates.push(`src/content/${col}/${last}.${ext}`);
    }
  }
  for (const c of candidates) {
    const d = sourceDate(c);
    if (d) return d;
  }
  return null;
}

// Espejo de src/data/giros.ts → INDEXAR_FICHAS_BASICAS (el config no importa TS de src/)
const INDEXAR_FICHAS_BASICAS = true;
const esFichaEmpresa = (url) => {
  const segs = new URL(url).pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  return segs[0] === 'empresas' && segs.length === 4 && segs[1] !== 'estado';
};

export default defineConfig({
  site: 'https://firefighters.mx',
  // Canonical: siempre slash final — así lo sirve producción (Cloudflare
  // redirige 308 /pagina → /pagina/). Medido 2026-08-12.
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Las rutas reales se detectan solas; excluir 404.
      // Fichas L4 del directorio de empresas (/empresas/<giro>/<estado>/<slug>/):
      // mientras INDEXAR_FICHAS_BASICAS sea false en src/data/giros.ts, llevan noindex
      // y se excluyen aquí. Mantener ambos en sincronía.
      filter: (page) => !page.includes('/404') && !(INDEXAR_FICHAS_BASICAS === false && esFichaEmpresa(page)),
      serialize: (item) => {
        // lastmod real por archivo fuente; si no se resuelve, se omite
        const lm = lastmodForUrl(item.url);
        if (lm) {
          item.lastmod = lm.toISOString();
        } else {
          delete item.lastmod;
        }
        return item;
      },
    }),
  ],
  image: {
    domains: ['firefighters.mx'],
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      exclude: ['@astrojs/image'],
    },
  },
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
