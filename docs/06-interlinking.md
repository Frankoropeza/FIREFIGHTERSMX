# Interlinking — regla de linkeo obligatorio

**Toda página nueva se linkea desde el momento en que se crea. Nunca páginas huérfanas.**

## Los 4 puntos de linkeo

1. **Header** — `src/data/navigation.ts`: agregar al dropdown correspondiente (Productos / Servicios / Industrias / Empresa). Los items padre son `<a>` navegables + dropdown en hover
2. **Footer** — `src/components/common/Footer.astro`: columna correspondiente (Productos / Servicios / Industrias / Empresa)
3. **Cards contextuales** — al menos 1 link desde una página del mismo nivel: grids del home, "Otras categorías" ([categoria].astro), "También te puede servir" (hub productos), "Relacionados" (fichas)
4. **QuickLinksBar** — si la página es estratégica, evaluar agregarla al pool top o footer del componente

## QuickLinksBar (2 barras en cada página)

`src/components/common/QuickLinksBar.astro` — barra segmentada full-width, 5 celdas iguales (grid lg:grid-cols-5), 4 links + 1 CTA naranja.

| Variant | Posición | Pool de links | CTA |
|---|---|---|---|
| `top` | Bajo el hero de cada página (insertar manualmente) | Catálogo, Servicios, Trajes bombero, Sistemas CI, Extintores | WhatsApp cotización gratuita |
| `footer` | Global vía BaseLayout (automática, no insertar) | Industrias, Blog, Certificaciones, Cobertura, Licitaciones | `/cotizacion` |

- Excluye automáticamente el link de la página actual (compara `Astro.url.pathname`) y rellena con el 5° del pool → nunca self-links
- Hover instantáneo sin transiciones

## Breadcrumbs

Toda página bajo un hub lleva breadcrumb visible + `BreadcrumbList` schema (ver [[04-seo]]). Patrón visual: nav `py-3` bg `#070E1A`, separador `/`, último item `aria-current="page"`.

## Verificación

El link-check y el check de huérfanas de [[04-seo]] son obligatorios tras crear/renombrar páginas. Estado actual: 47 páginas, 0 rotos, 0 huérfanas.

Relacionado: [[03-plantilla-pagina]] · [[05-componentes]]
