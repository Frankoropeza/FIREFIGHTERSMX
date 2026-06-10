# Plantilla Hub L2 — blueprint para secciones del sitio

Arquitectura de niveles: **L1** home `/` → **L2** hubs de sección (`/productos`, `/servicios`, `/industrias`*, `/blog`, páginas de empresa) → **L3** detalle (`/productos/[categoria]`, `/servicios/<servicio>`, post) → **L4** ficha (`/productos/<cat>/<producto>`).

El L2 de **Productos ya está 100 % homologado** y es la referencia viva. Este doc define el blueprint para replicarlo en los demás L2.

## Anatomía del hub L2 (orden vertical probado en /productos)

| # | Bloque | Componente / patrón | Obligatorio |
|---|---|---|---|
| 1 | Breadcrumb | nav py-3 bg `#070E1A` + BreadcrumbList schema | ✅ |
| 2 | Hero 2-col | h1 + CTAs izq. \| prose SEO 2 párrafos + badges normas der. + glow + línea acento | ✅ |
| 3 | QuickLinksBar | `<QuickLinksBar />` (variant top) | ✅ |
| 4 | Pilares de confianza | 4 celdas inline (título naranja + texto) — patrón en productos/index | Recomendado |
| 5 | Grid de cards | `CategoryCard` (productos) o equivalente del dominio, header 2-col | ✅ |
| 6 | **Spotlights** | `CategorySpotlight` en loop con fondos alternados `#070E1A`/`#040A12` | Recomendado |
| 7 | Cómo cotizar / proceso | Lista numerada 01–03 + CTA (patrón en productos/index) | Recomendado |
| 8 | Cross-links | Lista "También te puede servir" (5 links con descripción) | ✅ |
| (global) | QuickLinksBar footer + Footer | Los pone BaseLayout — no tocar | — |

## Anatomía del L3 (página de categoría — `[categoria].astro`)

Breadcrumb → Hero (eyebrow norma + h1 + `intro[]` 2 párrafos + CTAs) → QuickLinksBar → Líneas disponibles (grid-cell 4 col desde `items[]`) → Productos destacados (si hay `productCategory`) → Otras categorías (botones btn-sm btn-dark desde `allCategories`, excluye la actual).

**Todo L3 de productos es dinámico**: las 9 categorías (incluida trajes-bombero) salen de `allCategories` — no existen páginas estáticas de categoría. Para editar contenido: solo `src/data/categories.ts`.

## Complementos disponibles (catálogo para armar cualquier L2)

- `QuickLinksBar` (top/footer) — interlinking segmentado full-width
- `CategoryCard` — card visual con ícono/norma/líneas/botón acento
- `CategorySpotlight` — módulo 2-col texto+imagen (props: `cat`, `reverse`, `background`); requiere `spotlight` en data + SVG en `public/images/categorias/`
- Patrón **pilares de confianza** (4 celdas) · patrón **lista numerada 01–0N** · patrón **cross-links con descripción** · patrón **tabla de datos** (RiskGuide/NormsTable del home) · `grid-cell` ledger · FAQ `details.faq-item` + FAQPage schema
- Ilustraciones SVG homologadas: marco común (badges de norma arriba, callouts de spec, grid+glow) — generador documentado en el historial; nuevas imágenes deben seguir ese marco

## Cómo replicar a los L2 pendientes

- **/servicios**: hub con hero 2-col + grid de 6 servicios (cards tipo CategoryCard con data en `services.ts` — extender con shortDesc/accent/icon) + spotlights por servicio + cómo trabajamos + cross-links. L3 = 6 páginas migradas a este patrón (idealmente ruta dinámica `[servicio].astro` con data central, igual que productos)
- **/industrias**: ✅ hecho — hub + ruta dinámica con riesgos, cross-selling y FAQ por sector (referencia de L3 más completo)
- **/blog**: hub con grid de posts (BlogCard rediseñada al patrón grid-cell) + categorías
- **Empresa** (nosotros, certificaciones, cobertura, distribuidores, contacto, cotizacion, licitaciones, marcas): hero 2-col + secciones del catálogo de complementos

Checklist por página: el de [[03-plantilla-pagina]] aplica íntegro.

Relacionado: [[03-plantilla-pagina]] · [[05-componentes]] · [[02-arquitectura]] · [[08-pendientes]]
