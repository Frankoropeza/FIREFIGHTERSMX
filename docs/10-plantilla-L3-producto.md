# Plantilla L3 — Página dedicada de categoría de producto

> Blueprint de la página **L3 de producto dedicada** (estática y rica), probada en `src/pages/productos/trajes-bombero/index.astro`. Es la primera de las 9 categorías que se migran del template dinámico genérico a una página propia con contenido profundo.

## Cuándo usar L3 dedicada vs dinámica

| Tipo | Archivo | Cuándo |
|---|---|---|
| **L3 genérica (dinámica)** | `productos/[categoria].astro` | Categoría sin contenido propio profundo. Renderiza `intro`, `items` y `featuredProducts` desde `categories.ts` |
| **L3 dedicada (estática)** | `productos/<slug>/index.astro` | Categoría estratégica que merece tipos, comparativa, guía, FAQ y cross-selling propios |

### Regla de oro: evitar colisión de rutas

Si creas una página estática `productos/<slug>/index.astro`, **debes excluir ese slug** del `getStaticPaths` del template dinámico, o el build falla por ruta duplicada:

```ts
// src/pages/productos/[categoria].astro
export function getStaticPaths() {
  // OJO: declarar el array DENTRO de getStaticPaths. Astro extrae esta función
  // y un const a nivel de módulo queda fuera de scope → "X is not defined" en build.
  const staticL3 = ['trajes-bombero', 'cascos-nfpa']; // slugs con página dedicada
  return allCategories
    .filter((cat) => !staticL3.includes(cat.slug))
    .map((cat) => ({ params: { categoria: cat.slug }, props: { cat } }));
}
```

> **Gotcha real:** `getStaticPaths` se evalúa aislada. Un `const STATIC_L3` a nivel de módulo (fuera de la función) rompe el build con `STATIC_L3 is not defined`. Mantener la lista dentro de la función.

**L3 dedicadas hechas:** `trajes-bombero`, `cascos-nfpa`. Pendientes: equipos-scba, herramientas-rescate, extintores, sistemas-ci, camaras-termicas, hazmat, drones-emergencia.

El slug se mantiene en `allCategories` (para el hub `/productos`, las cards y el internal linking). Solo se excluye de la generación dinámica.

## Anatomía vertical (orden probado en /productos/trajes-bombero)

| # | Bloque | Patrón / componente | Obligatorio |
|---|---|---|---|
| 1 | Breadcrumb 3 niveles | nav `py-3` bg `#070E1A` + `BreadcrumbList` (Inicio / Productos / Categoría) | ✅ |
| 2 | Hero 2-col | eyebrow norma + h1 única + CTAs (WhatsApp + `/cotizacion`) \| prose `cat.intro` + badges | ✅ |
| 3 | QuickLinksBar | `<QuickLinksBar />` inmediatamente bajo el hero | ✅ |
| 4 | Tipos / variantes (educativo) | 3 cards con ícono SVG + accent por tipo, sin CTA | Recomendado |
| 5 | Modelos destacados | grid de cards: producto real → ficha **L4**; líneas sin ficha → WhatsApp (`whatsappUrl`) | ✅ |
| 6 | Tabla comparativa | `<table>` dark (header `#0C1825`, filas alternas `#080F1A`/`#0A1320`, `overflow-x-auto`) | Recomendado |
| 7 | Guía de selección + blog | 2-col: lista numerada `01–0N` \| "Aprende más" enlazando los posts del blog | Recomendado |
| 8 | FAQ | `details.faq-item` + ícono `+` que rota en `[open]` + `FAQPage` schema | Recomendado |
| 9 | Cross-links + otras categorías | "También te puede servir" (5 links) + chips `btn-sm btn-dark` de otras categorías | ✅ |

## Schemas JSON-LD (L3 dedicada)

`schema={[breadcrumbSchema, collectionSchema, faqSchema]}`:

- `BreadcrumbList` — 3 niveles
- `CollectionPage` con `mainEntity` = `ItemList` de modelos/líneas
- `FAQPage` — generado del array `faqs`

## Reglas de contenido y honestidad de enlaces

- **Solo enlazar fichas L4 que existen.** El producto real (ej. Globe GX-7 → `featuredProducts`) enlaza a su ruta L4. Las líneas sin ficha (Lion, proximidad, forestal) enlazan a **WhatsApp con mensaje contextual** — nunca a una URL inexistente.
- Datos vienen de `categories.ts` (`trajesBombero.intro`, `cat.norm`, `cat.description`) y `products.ts` (`featuredProducts`). No hardcodear lo que ya está en data.
- Normativa siempre vigente: **NFPA 1970** (estructural/SCBA, antes 1971/1981), **NFPA 1977** (forestal), **NFPA 1850** (cuidado). Ver [[04-seo]] y los posts del blog.

## Complementos reutilizados en L3 (catálogo)

- `QuickLinksBar` (top) · patrón **hero 2-col** con glow + línea de acento (de [[09-plantilla-hub-L2]])
- Patrón **cards con ícono en círculo de acento** (`width:52px;border:1.5px solid <accent>59`)
- Patrón **grid de modelos** (card `#080F1A` + borde, hover `rgba(247,80,0,0.45)`)
- Patrón **tabla comparativa dark** · patrón **lista numerada 01–0N** · patrón **FAQ `details`** + `FAQPage`
- Patrón **cross-links "También te puede servir"** + **chips de otras categorías**

## Flujo al terminar una página (obligatorio)

Cada página nueva se linkea de inmediato en los 4 puntos (ver [[06-interlinking]]):

1. **Header** — `navigation.ts` (dropdown correspondiente). Trajes ya estaba en Productos ▸ Trajes para Bomberos.
2. **Footer** — `Footer.astro` (columna correspondiente).
3. **Cards contextuales** — card del hub (`CategoryCard`) + "También te puede servir" de páginas hermanas.
4. **QuickLinksBar** — evaluar si entra al pool.

Luego: `npx astro build` + link-check (0 rotos, 0 huérfanas).

Relacionado: [[09-plantilla-hub-L2]] · [[03-plantilla-pagina]] · [[06-interlinking]] · [[02-arquitectura]]
