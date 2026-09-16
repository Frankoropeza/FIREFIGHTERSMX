import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { existsSync, statSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';

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

// Una página `noindex` nunca va al sitemap (Ahrefs 2026-09-16: 164 etiquetas y
// categorías del blog con noindex estaban listadas). En vez de duplicar aquí el
// umbral de src/lib/blog-taxonomia.ts, se lee el HTML ya generado: el filtro del
// sitemap corre en astro:build:done, con dist/ escrito. Así sitemap y meta robots
// no pueden divergir, para cualquier sección del sitio.
const DIST = join(ROOT, 'dist');
const esNoindex = (url) => {
  const f = join(DIST, decodeURIComponent(new URL(url).pathname), 'index.html');
  if (!existsSync(f)) return false;
  return /<meta name="robots" content="noindex/.test(readFileSync(f, 'utf8'));
};

// Enlaces internos con barra final. Producción sirve /pagina/ y redirige 308
// /pagina → /pagina/; Ahrefs (2026-09-16) contó 2,482 páginas enlazando a un
// redirect y 1,153 URLs 3XX, casi todas por `href="/ruta"` sin barra en menús,
// migas, pies y tarjetas (~540 mil ocurrencias en dist/). Corregirlas una a una
// en cientos de plantillas no escala y vuelve a romperse con cada componente
// nuevo, así que se normaliza al final del build: sólo se añade la barra cuando
// dist/<ruta>/index.html EXISTE, de modo que nunca se inventa una URL.
const barraFinalInterna = () => ({
  name: 'ffmx-barra-final-interna',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const raiz = fileURLToPath(dir);
      const esPagina = new Map();
      const existe = (ruta) => {
        if (!esPagina.has(ruta)) {
          let r = ruta;
          try { r = decodeURIComponent(ruta); } catch {}
          esPagina.set(ruta, existsSync(join(raiz, r, 'index.html')));
        }
        return esPagina.get(ruta);
      };
      const re = /href="(?:https:\/\/firefighters\.mx)?(\/[^"#?]*?[^\/"#?])([?#][^"]*)?"/g;
      const reAbs = /"https:\/\/firefighters\.mx(\/[^"#?\s<>]*?[^\/"#?\s<>])([?#][^"]*)?"/g;
      let archivos = 0, cambios = 0;
      const recorrer = (d) => {
        for (const e of readdirSync(d, { withFileTypes: true })) {
          const f = join(d, e.name);
          if (e.isDirectory()) { recorrer(f); continue; }
          if (!e.name.endsWith('.html')) continue;
          const src = readFileSync(f, 'utf8');
          let n = 0;
          const arreglar = (m, ruta, resto = '') => {
            if (/\.[a-z0-9]{2,5}$/i.test(ruta) || ruta.startsWith('/cdn-cgi/') || !existe(ruta)) return m;
            n++;
            return m.replace(ruta + resto + '"', ruta + '/' + resto + '"');
          };
          // 1) href relativos y absolutos · 2) URLs absolutas entre comillas en
          // JSON-LD y metadatos (migas, ItemList, url de entidades)
          const out = src.replace(re, arreglar).replace(reAbs, arreglar);
          if (n) { writeFileSync(f, out); archivos++; cambios += n; }
        }
      };
      recorrer(raiz);
      logger.info(`BARRA FINAL: ${cambios} enlaces internos normalizados en ${archivos} archivos.`);
    },
  },
});

export default defineConfig({
  site: 'https://firefighters.mx',
  // Canonical: siempre slash final — así lo sirve producción (Cloudflare
  // redirige 308 /pagina → /pagina/). Medido 2026-08-12.
  trailingSlash: 'always',
  integrations: [
    barraFinalInterna(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Las rutas reales se detectan solas; excluir 404.
      // Fichas básicas del directorio: indexables por decisión editorial.
      filter: (page) => !page.includes('/404') && !page.includes('/parciales/') && !(INDEXAR_FICHAS_BASICAS === false && esFichaEmpresa(page)) && !esNoindex(page),
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
