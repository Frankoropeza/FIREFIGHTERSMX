# Pendientes y deuda técnica

## Prioridad alta — migración v1 → v2

~25 páginas interiores siguen en el design system v1 (claro: `bg-gradient-fire`, `section-title`, `btn-gold`, paleta `dark-*`). Funcionan gracias a la **capa de compatibilidad** en `global.css` y `tailwind.config.cjs`, pero deben migrarse a la plantilla [[03-plantilla-pagina]]:

- [x] `productos/trajes-bombero` — absorbida en `[categoria].astro` vía `allCategories` (jun 2026); **rama /productos 100 % homologada (L2+L3+L4)**
- [x] `servicios/*` — **rama /servicios 100 % homologada** (jun 2026): hub blueprint + ruta dinámica `[servicio].astro` desde services.ts ampliado; evolución: FAQ + schemas Service/OfferCatalog/FAQPage por servicio
- [x] `industrias/*` — **rama /industrias 100 % homologada** (jun 2026): hub nuevo + `[industria].astro` desde industries.ts; evolución: riesgos por sector + cross-selling a categorías/servicios recomendados + FAQ con FAQPage schema
- [x] `nosotros`, `contacto`, `cotizacion`, `cobertura`, `certificaciones`, `distribuidores`, `marcas/index` — **migradas a v2** (jun 2026): breadcrumb + BreadcrumbList schema, hero con eyebrow/h1 única, QuickLinksBar, secciones 2-col, tokens v2; 0 clases compat v1 restantes. `licitaciones` ya estaba en v2.
- [x] `blog/index.astro` + `BlogCard` en v2 (breadcrumb, hero, QuickLinksBar, filtros)
- [ ] `404.astro` sigue en v1 (3 marcadores) — pendiente menor
- [ ] Al terminar la migración: borrar capa compat de global.css y paletas legacy de tailwind.config (verificar que ninguna página la use antes)

## Homologación de normas (jun 2026)

- [x] Todo el sitio actualizado a **NFPA 1970** (consolidó 1971/1981/1982 desde 2024) y **NFPA 1850** (antes 1851). Se conserva "(antes 1971/1981)" en prose clave para reconocimiento/SEO. URLs/slugs `nfpa-1971` NO se tocaron (evitar romper enlaces). Blog y catálogo homologados; build + link-check 0 rotos/0 huérfanas.

## Prioridad media

- [x] **Spotlights de categoría en /productos**: las 9 categorías completas (texto izquierda + imagen SVG derecha, fondos alternados vía loop). Para reemplazar ilustraciones por fotos reales: sustituir `public/images/categorias/<slug>.svg`


- [x] Formularios **conectados a WhatsApp** sin backend (jun 2026): los 3 forms (contacto, cotizacion, FAQSection) llevan `data-wa-form` + script que arma el mensaje con los campos y abre `wa.me/${SITE.whatsapp}`. Validación nativa con `reportValidity()`. Para email real, cambiar a Formspree (ver comentario en el `<script>`).
- [x] **Datos de contacto centralizados en `site.ts`** (jun 2026): `phone`, `phoneE164`, `email`, `whatsapp`, `hours` y `social{}`. Footer, contacto, WhatsAppButton y SEO (sameAs) los consumen. **Solo falta poner los valores REALES** (hoy placeholder: `55 1234-5678`, `contacto@firefightersmx.com`, handles `firefightersmx`).
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
