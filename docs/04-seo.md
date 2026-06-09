# SEO — Metas, schemas y verificación

Pipeline: `BaseLayout` → `SEO.astro` (metas + OG + Twitter + Organization schema global + schemas por página vía prop `schema`).

## Metas por página

- `title`: ≤60 chars, keyword primero, sufijo `— FIREFIGHTERS MX` (SEO.astro lo agrega si falta)
- `description`: 140–160 chars, keyword + diferenciador + CTA ("Cotización en 24 h", "Envío a 32 estados")
- `canonicalURL`: SIEMPRE explícito con `SITE.url` (prop del BaseLayout; ojo: se llama `canonicalURL`, no `canonical`)
- `noindex={true}` solo en 404
- OG image global: `/images/og-default.jpg` (1200×630); por página vía prop `ogImage`

## Schemas JSON-LD por tipo de página

| Página | Schemas (además de Organization global) |
|---|---|
| Home `/` | `Store` (#store), `WebSite` (#website), `FAQPage` (desde faqs.ts), `ItemList` de servicios |
| Hub `/productos` | `CollectionPage` + `ItemList` de categorías, `BreadcrumbList` |
| Categoría `/productos/[slug]` | `BreadcrumbList` (3 niveles) |
| Ficha producto | `Product` + `Offer` (MXN, InStock) + `BreadcrumbList` (4 niveles) |
| Blog post | `Article` (en BlogLayout) |
| Páginas de empresa/servicio | `BreadcrumbList` mínimo; `Service` si aplica |

Patrón BreadcrumbList:
```ts
{ '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Productos', item: `${SITE.url}/productos` },
    { '@type': 'ListItem', position: 3, name: label, item: canonicalURL },
  ] }
```

## Infraestructura

- `robots.txt`: permite todo; NO bloquear `/_astro/` (Google necesita CSS/JS); Sitemap → `https://firefighters.mx/sitemap-index.xml`
- Sitemap: `@astrojs/sitemap` **pineado a 3.2.1** (3.7+ requiere Astro 5 y rompe el build); autodetecta rutas, filtra 404
- Assets: `favicon.svg`, `apple-touch-icon.png`, `icon-192/512.png`, `logo.png` (referenciado en Organization schema), `site.webmanifest`, `public/CNAME`
- Fuentes vía `<link>` (no `@import`) · `theme-color #040A12`

## Verificación post-build (correr siempre)

```bash
npx astro check && npx astro build
cd dist
# Links rotos:
grep -rhoE 'href="/[^"#]*"' --include="*.html" . | sed 's/href="//;s/"$//' | sort -u | \
  while read p; do c="${p%/}"; [ -z "$c" ] && continue; \
  [ -f ".$c/index.html" ] || [ -f ".$c" ] || echo "ROTO: $p"; done
# Páginas huérfanas:
find . -name index.html | sed 's|^\.||;s|/index.html$||' | while read p; do [ -z "$p" ] && continue; \
  grep -rql "href=\"$p\"" --include="*.html" . || grep -rql "href=\"$p/\"" --include="*.html" . || echo "HUÉRFANA: $p"; done
```

Validar schemas: https://search.google.com/test/rich-results

Relacionado: [[03-plantilla-pagina]] · [[06-interlinking]] · [[07-deploy]]
