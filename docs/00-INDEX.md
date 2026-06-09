# FIREFIGHTERS MX — Documentación del sitio

> Vault de referencia para homologar todas las páginas. Abrir esta carpeta (`docs/`) como vault en Obsidian.
> Última actualización: 2026-06-09 · Stack: Astro 4 + Tailwind 3 · Deploy: GitHub Pages · Dominio: https://firefighters.mx

## Mapa de contenido

- [[01-design-system]] — Tokens, colores, tipografía, clases CSS y **reglas duras** (animaciones solo en botones)
- [[02-arquitectura]] — Estructura de carpetas, fuentes de datos, rutas dinámicas y cómo se genera cada página
- [[03-plantilla-pagina]] — **Anatomía de la página homologada** + checklist obligatorio para toda página nueva
- [[04-seo]] — Metas, schemas JSON-LD por tipo de página, robots, sitemap, OG y verificación
- [[05-componentes]] — Catálogo de componentes reutilizables con su uso correcto
- [[06-interlinking]] — Regla de linkeo obligatorio, QuickLinksBar (2 variantes), header y footer
- [[07-deploy]] — GitHub Actions, dominio, DNS Cloudflare y cómo publicar
- [[08-pendientes]] — Deuda técnica: páginas v1 por migrar y mejoras planeadas

## Reglas de oro (resumen ejecutivo)

1. **Toda página nueva se linkea** en header (`navigation.ts`), footer (`Footer.astro`) y al menos una card contextual — nunca huérfanas → [[06-interlinking]]
2. **Cards sin animaciones ni transiciones**; solo `.btn*` y el botón flotante de WhatsApp las conservan → [[01-design-system]]
3. **Datos en `src/data/`**, nunca hardcodeados en componentes: categorías, productos, servicios, FAQs, navegación → [[02-arquitectura]]
4. **Toda página lleva**: breadcrumb + BreadcrumbList schema, QuickLinksBar bajo el hero, title/description únicos, canonical → [[03-plantilla-pagina]]
5. **Verificar después de cada cambio**: `npx astro check` + `npx astro build` + link-check (0 rotos, 0 huérfanas) → [[04-seo]]
