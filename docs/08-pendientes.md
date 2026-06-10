# Pendientes y deuda técnica

## Prioridad alta — migración v1 → v2

~25 páginas interiores siguen en el design system v1 (claro: `bg-gradient-fire`, `section-title`, `btn-gold`, paleta `dark-*`). Funcionan gracias a la **capa de compatibilidad** en `global.css` y `tailwind.config.cjs`, pero deben migrarse a la plantilla [[03-plantilla-pagina]]:

- [ ] `productos/trajes-bombero/index.astro` (única categoría no dinámica — evaluar absorberla en `[categoria].astro` agregando su intro larga a categories.ts)
- [ ] `servicios/index.astro` + 6 páginas de servicio
- [ ] `industrias/*.astro` (8 páginas)
- [ ] `blog/index.astro` + `BlogLayout.astro` + `BlogCard`
- [ ] `nosotros`, `contacto`, `cotizacion`, `cobertura`, `certificaciones`, `distribuidores`, `licitaciones`, `marcas/index`
- [ ] Al terminar la migración: borrar capa compat de global.css y paletas legacy de tailwind.config

## Prioridad media

- [x] **Spotlights de categoría en /productos**: las 9 categorías completas (texto izquierda + imagen SVG derecha, fondos alternados vía loop). Para reemplazar ilustraciones por fotos reales: sustituir `public/images/categorias/<slug>.svg`

- [ ] Crear hub `/industrias` (hoy el menú "Industrias" navega a bomberos-municipales)
- [ ] Formularios (`/api/cotizacion`) no tienen backend — conectar (Formspree/worker/email) o cambiar a mailto/WhatsApp
- [ ] Imágenes reales de producto (hoy las fichas no llevan imagen; agregar `image` a Product schema cuando existan)
- [ ] OG images por categoría (hoy todas usan og-default.jpg)
- [ ] Datos placeholder: teléfono `55 1234-5678`, email `contacto@firefightersmx.com`, redes sociales — confirmar reales en `site.ts`, `SEO.astro` (sameAs), Footer
- [ ] GTM/analytics: slot `analytics` en BaseLayout vacío — instalar herramienta real

## Prioridad baja

- [ ] Más posts de blog (solo 3) — el home muestra los 3 últimos automáticamente
- [ ] Página de marcas: enriquecer con logos reales
- [ ] FAQPage schema por categoría (FAQs específicas de extintores, SCBA, etc.)
- [ ] hreflang si algún día hay versión EN

## Registro de decisiones (por qué)

- Sitemap 3.2.1 pineado → incompatibilidad Astro 4 ([[07-deploy]])
- TrustStrip (marquee de marcas) eliminado → reemplazado por QuickLinksBar a petición de Frank (jun 2026)
- Sin animaciones en cards → petición explícita de Frank; solo botones ([[01-design-system]])
- Card de categoría unificada en `CategoryCard` → un solo lugar para cambios de diseño
