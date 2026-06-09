# Deploy — GitHub Pages + Cloudflare

- Repo: `github.com/Frankoropeza/FIREFIGHTERSMX` · rama `main`
- Dominio: `https://firefighters.mx` (¡con punto antes de .mx! — definido en `astro.config.mjs` `site` y `src/data/site.ts` `SITE.url`)
- `public/CNAME` contiene `firefighters.mx` (Astro lo copia a dist/ en cada build — sin él, cada deploy borraría el custom domain)

## Flujo de publicación

```bash
cd ~/Documents/Claude/Projects/FIREFIGHTERSMX
git add -A && git commit -m "mensaje"
git push origin main      # ← dispara el deploy automático
```

Workflow: `.github/workflows/deploy.yml` — push a main → `npm ci` → `npm run build` → deploy a GitHub Pages. También se puede correr manual desde la pestaña Actions (workflow_dispatch).

⚠️ `npm ci` exige `package-lock.json` en sync — si instalas paquetes, commitea el lock.
⚠️ `@astrojs/sitemap` pineado a **3.2.1** (3.7+ requiere Astro 5; rompe build con `Cannot read properties of undefined (reading 'reduce')`).

## Configuración GitHub (Settings → Pages)

- Source: **GitHub Actions**
- Custom domain: `firefighters.mx` + Enforce HTTPS (cuando valide)

## DNS Cloudflare

- 4 registros **A** para `firefighters.mx` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **DNS only (nube gris)** mientras GitHub emite el certificado; después puede activarse proxy
- SSL/TLS en modo **Full** (Flexible causa loop de redirección con GitHub Pages)
- Eliminar cualquier registro viejo apuntando a `origenlab.github.io`

## Si el deploy falla

1. Job `build` falló → correr `npx astro check && npm run build` local, arreglar, push
2. Job `deploy` falló → revisar Settings → Pages (Source debe ser GitHub Actions); re-run failed jobs

Relacionado: [[02-arquitectura]] · [[04-seo]]
