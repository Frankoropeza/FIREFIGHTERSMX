# Catálogo de componentes

## common/ (todo el sitio)

| Componente | Uso |
|---|---|
| `BaseLayout.astro` | Envuelve toda página. Props: `title`, `description`, `canonicalURL`, `ogImage`, `ogType`, `noindex`, `schema` (objeto o array). Incluye Header, QuickLinksBar footer, Footer, WhatsApp float |
| `SEO.astro` | Metas + OG + Twitter + Organization schema. No se usa directo: lo llama BaseLayout |
| `Header.astro` | Nav data-driven desde `navigation.ts`. Items con hijos = `<a>` que navega + dropdown en hover. Menú móvil con JS mínimo |
| `Footer.astro` | 4 columnas (Brand+contacto / Productos / Servicios+Industrias / Empresa) + legal. **Actualizar al crear páginas** |
| `QuickLinksBar.astro` | Barra segmentada full-width 5 celdas. Props: `variant: 'top' \| 'footer'`. Excluye el link de la página actual automáticamente. Top: se inserta bajo el hero de cada página. Footer: global en BaseLayout, NO insertar manualmente |
| `TopBar.astro` | Barra superior (teléfono/horario) |
| `WhatsAppButton.astro` | Flotante. ÚNICO componente no-btn con animaciones permitidas |

## products/

| Componente | Uso |
|---|---|
| `CategoryCard.astro` | **Card compartida** de categoría (visual gradiente + ícono, norma, shortDesc, 3 líneas, botón de acento). Prop: `cat: Category`. La usan el home (ProductCards) y el hub /productos. Cambios de diseño de card → SOLO aquí |
| `ProductCard.astro` | v1, usado por trajes-bombero — por migrar |

## home/ (secciones del index, en orden)

`HeroPro` → `QuickLinksBar (top)` → `ProductCards` (8 CategoryCards) → `RiskGuide` (tabla riesgos NOM-002) → `ValueProps` → `ServicesSection` (01–06 desde services.ts) → `NormsTable` (tabla NOM/NFPA) → `ProcessSteps` (4 pasos) → `IndustriesSection` (8 sectores) → `CoverageSection` (regiones/tiempos) → `TestimonialsSection` → `BlogTeasers` (3 últimos posts vía getCollection) → `FAQSection` (acordeón desde faqs.ts + formulario) → `CTASection` (2 columnas)

## Patrones de sección reutilizables

- **Header 2-col**: eyebrow + h2 (2ª línea naranja) | prose con border-left naranja
- **Grid ledger**: celdas `grid-cell` con bordes `rgba(74,117,153,0.18)`, sin gap
- **Tabla de datos**: thead bg `#122133`, filas zebra `#0C1825`/`#0A1420`, `caption` sr-only, `scope` en th
- **Lista numerada 01–0N**: número display gigante + título + descripción

Relacionado: [[01-design-system]] · [[03-plantilla-pagina]]
