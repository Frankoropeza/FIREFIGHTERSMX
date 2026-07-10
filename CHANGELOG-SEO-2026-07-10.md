# CHANGELOG SEO Técnico — FIREFIGHTERS.MX — 2026-07-10

SOP Maestro SEO (Ola 1). Alcance TÉCNICO estricto: cero datos de negocio nuevos.
Commit principal: `4dcae83` · Estado: **LOCAL, SIN PUSH — bloqueado por permisos (403 Origenlab → repo Frankoropeza)**.

## Cambios aplicados

### 1. OG images universales (JPEG) — 47 páginas de blog
- **Problema:** los 47 posts del blog emitían `og:image` en `.avif` (32 archivos únicos). WhatsApp/Facebook/Twitter no renderizan AVIF → previews rotos.
- **Fix:** `src/components/common/SEO.astro` reescribe en build cualquier og `.avif`/`.webp` a su espejo `/images/og/<ruta-aplanada>.jpg` (naming dir-a-guiones, sin colisiones verificado).
- 32 JPEG 1200×630 generados con PIL (crop cover, quality=82, progressive, optimize, RGB) en `public/images/og/` (~3.6 MB total).

### 2. `og:image:type` + `og:image:alt` — todo el sitio
- Antes: 0/1035 páginas. Ahora: 1035/1035.
- `og:image:type` dinámico (image/jpeg | image/png según extensión real — no miente).
- `og:image:alt` = título completo de la página.

### 3. Logo schema con dimensiones reales
- `SEO.astro` (Organization) y `BlogLayout.astro` (publisher del Article): logo pasó de string/ImageObject sin medidas a `ImageObject` con `width/height` 512×512 (dimensiones REALES de `public/logo.png` medidas con PIL).

### 4. Sitemap lastmod real (antes: todas idénticas)
- **Problema:** `lastmod: new Date()` → las 1035 URLs con la fecha del build (verificado en producción: única fecha 2026-06-30T20:02:20Z).
- **Fix:** resolver URL→archivo fuente en `astro.config.mjs` (patrón EVENTECH adaptado a colecciones `blog` y `productos`): `git log -1 --format=%cI` → fallback mtime → si no resuelve, se OMITE lastmod (no mentir).
- Resultado local: 103 URLs con fecha git real (11 fechas únicas, rango 2026-06-09 → 2026-06-30); 932 URLs dinámicas (estaciones/cobertura/marcas/industrias/tags, 13 rutas `[param]`) omiten lastmod honestamente.

### 5. `deploy.yml`: `fetch-depth: 0` en checkout
- Sin historial completo, `git log` devuelve la fecha del HEAD para todo (verificado en piloto EVENTECH).

### 6. `@astrojs/sitemap` pineado `3.2.1` exacto (sin caret)
- Astro 4.x: sitemap 3.3+ crashea el build. El caret `^3.2.1` podía resolver a 3.7.x si el lock se desincroniza (el workflow hace `npm ci || npm install`). Lock ya estaba en 3.2.1; ahora package.json coincide exacto.

## Hallazgos verificados SIN acción necesaria
- **www.firefighters.mx → 301 a apex ya activo** (rama "ya resuelto" del SOP). No se creó `_redirects`.
- **Dominio vs firefightersmx.pages.dev: MISMO build** (lastmod idéntico en ambos sitemaps). Sin drift tipo MEDEDUL.
- **Breadcrumbs:** home 0, ninguna página >1. OK.
- **OG rotos:** 0 (los 32 avif del frontmatter existen todos en `public/`).
- **Product schema en 160 páginas:** trabajo AISO Fase 1+2 intencional (2026-06-25) con precios. 0 páginas con Service+Product duplicado → NO se tocó nada.

## NO aplicado (con razón)
- **NAP (dirección/teléfono placeholder):** conocido y FUERA de alcance técnico — no se tocó ningún dato de negocio.
- **284 errores preexistentes de `astro check`** en 9 archivos de páginas (p.ej. `productos/drones-emergencia/index.astro`, `cat.spotlight` possibly undefined): NO son del alcance SEO, el CI los tolera por diseño (`npx astro check || true`). Mis 3 archivos tocados: 0 errores.
- **Article schema del blog** emite `image` con URL relativa y en `.avif`: fuera de la lista del SOP; Google sí parsea AVIF y resuelve relativas contra el documento. Anotado para futura ola.
- **308 en URLs de blog sin slash** (CF Pages formato directory vs `trailingSlash: 'never'`): comportamiento preexistente de plataforma, fuera de alcance.

## Pendientes manuales (dashboard / Frank)
1. **PUSH BLOQUEADO — ÚNICO gate pendiente:** `git push origin main` devolvió `403 Permission to Frankoropeza/FIREFIGHTERSMX.git denied to Origenlab`. La Mac tiene credenciales de la cuenta Origenlab; el repo vive en Frankoropeza. Fix conocido del portafolio: **invitar a `Origenlab` como colaborador del repo `Frankoropeza/FIREFIGHTERSMX`** (Settings → Collaborators) o pushear con sesión Frankoropeza. Hay 2 commits locales listos: `4dcae83` (fixes) + changelog. Tras el push: verificar Action verde y validación live (og JPEG 200, sitemap lastmod variado).
2. Limpieza hecha en sesión: `.git/index.lock` stale del 2026-07-07 (0 bytes) removido — git del repo volvió a funcionar.

## Validación
- Build local: verde (1042 páginas, EXIT=0).
- Validador dist/: og avif/webp 0 · og rotos 0 · og:image:type/alt 1035/1035 · lastmod 11 fechas únicas · breadcrumbs OK · logo ImageObject OK.
- Secretos: grep limpio; remote sin token embebido.
- **Validación LIVE: PENDIENTE de push** (producción aún sirve el build 2026-06-30 con og .avif y lastmod único).
