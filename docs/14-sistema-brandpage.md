# Sistema BrandPage — Páginas L4 de marca unificadas

> Motor data-driven que renderiza **todas** las páginas de marca del sitio (cascos, trajes, SCBA, cámaras térmicas) desde un solo componente y una sola forma de datos.
> Sustituye al blueprint standalone de [[11-paginas-L4-marca]] (que queda como referencia histórica).
> Última actualización: 2026-06-23 · 16 marcas · 5 categorías.

## Resumen ejecutivo

Cada marca es un objeto `EquipmentBrand` en una *data file* por categoría. El componente compartido `BrandPage.astro` lo renderiza con la estructura canónica completa. Las páginas (`/productos/<categoria>/<marca>`) son **wrappers de 6 líneas**. Resultado: homologación garantizada y **evolución en un solo lugar**.

- **Evolucionar la estructura** (secciones, diseño) → editar `BrandPage.astro` → aplica a las 13 marcas.
- **Evolucionar el contenido** de una marca → editar su objeto en la data file.
- **Evolucionar columnas / categoría / familias** → editar `brandPages.ts`.

## Arquitectura (3 capas)

```
src/data/brandPages.ts        ← NÚCLEO: tipos + tipoEquipo + categoriaMarca + registro + helpers
  ├── src/data/cascosBrands.ts    (3 marcas · tipo local CascoBrand, adaptado)
  ├── src/data/trajesBrands.ts    (4 marcas · EquipmentBrand)
  ├── src/data/scbaBrands.ts      (3 marcas · EquipmentBrand)
  ├── src/data/camarasBrands.ts   (3 marcas · EquipmentBrand)
  └── src/data/herramientasBrands.ts (3 marcas · EquipmentBrand)

src/components/products/BrandPage.astro   ← PLANTILLA única (envuelve BaseLayout, genera schemas, renderiza secciones)

src/pages/productos/<categoria>/<marca>/index.astro   ← WRAPPER de 6 líneas (×13)
```

**Wrapper canónico** (lo único que se crea por marca nueva):

```astro
---
import BrandPage from '@components/products/BrandPage.astro';
import { brandPageBySlug } from '@data/brandPages';

const brand = brandPageBySlug('msa-gallet')!;
---
<BrandPage brand={brand} />
```

## Archivos clave

| Archivo | Rol |
|---|---|
| `src/data/brandPages.ts` | Tipos (`EquipmentBrand`, `ComparativaRow`), `tipoEquipo`, `categoriaMarca`, registro `brandPages`, helpers `brandPageBySlug` / `hermanasMarca` |
| `src/data/cascosBrands.ts` | 3 marcas de cascos (tipo local `CascoBrand`; se adapta a `EquipmentBrand` en brandPages) |
| `src/data/trajesBrands.ts` | 4 marcas de trajes |
| `src/data/scbaBrands.ts` | 3 marcas de SCBA |
| `src/data/camarasBrands.ts` | 3 marcas de cámaras térmicas |
| `src/data/herramientasBrands.ts` | 3 marcas de herramientas de rescate |
| `src/components/products/BrandPage.astro` | Plantilla compartida que renderiza todo |
| `src/components/products/ProductCard.astro` | Card de producto (lee `product.specs` por claves) |
| `src/pages/productos/[categoria].astro` | Hub dinámico; muestra "Catálogo por marca" automáticamente |

## El tipo `EquipmentBrand`

Cada marca implementa esta forma (ver `brandPages.ts` para el detalle):

```ts
interface EquipmentBrand {
  categorySlug: string;      // 'cascos-nfpa' | 'trajes-bombero' | 'equipos-scba' | 'camaras-termicas'
  slug: string;              // ÚNICO en todo el registro (ver Gotchas)
  brand: string;             // valor exacto de `brand` en products.ts para filtrar el catálogo
  brandLabel: string;        // nombre mostrado
  crossDesc: string;         // descripción corta como cross-link hermano
  eyebrow; heroTitleTop; heroTitleAccent; heroLead;
  heroIntro: string[];       // párrafos columna derecha del hero
  heroBadges: string[];
  seoTitle; seoDescription;  // metas (title ≤60, description 140–160)
  founding?; parentOrg?;     // para el schema Brand
  stats: {valor,etiq}[];             // 4 — barra de stats del hero
  credenciales: {n,t,d}[];           // 4 — pilares de confianza
  linesIntro; lineas: BrandLinea[];  // 3–4 familias (con `tipo` → ícono/color)
  flagship; anatomiaIntro; anatomia: {t,d}[];  // 6 — "Anatomía del flagship"
  comparativa: ComparativaRow[]; comparativaNote;
  guia: {n,t}[];             // 4 pasos — guía de selección
  segmentosIntro; segmentos: BrandSegmento[];  // 4 cuadrantes (con `tipo`)
  faqs: {q,a}[];             // 5–6 — FAQPage schema
  ctaKicker; ctaTitleHtml;   // banda CTA naranja (ctaTitleHtml admite <br/>)
  waQuote;                   // mensaje base de WhatsApp
}
```

## `categoriaMarca` — configuración por categoría

En `brandPages.ts`. Define lo que cambia entre categorías: etiqueta, filtro de productos, **columnas de la comparativa** y los cross-links "Equipa el conjunto completo".

```ts
categoriaMarca['<slug>'] = {
  label, productCategory,         // breadcrumb + filtro featuredProducts
  comparativaCols: ComparativaCol[],   // columnas tras Modelo|Tipo
  conjunto: CrossLink[],          // cross-links del conjunto
}
```

Columnas por categoría (`comparativaCols`):

| Categoría | Columnas (tras Modelo · Tipo) |
|---|---|
| `cascos-nfpa` | Norma · Material · Protección facial · Peso · Ideal |
| `trajes-bombero` | Shell · TPP · THL · Peso · Ideal |
| `equipos-scba` | Autonomía · Cilindro · Peso · Electrónica · Ideal |
| `camaras-termicas` | Resolución · Sensor · Autonomía · Peso · Ideal |
| `herramientas-rescate` | Fuerza/Capacidad · Apertura/Carrera · Peso · Fuente · Ideal |

Las claves de cada columna existen como campos opcionales en `ComparativaRow`. El componente lee `(row as any)[col.key]`.

## `tipoEquipo` — familias (ícono + color)

Cada `tipo` mapea a `{ label, color, icon }`. Las `lineas`, `segmentos` y la columna *Tipo* de la comparativa usan estas claves:

| key | label | color | uso típico |
|---|---|---|---|
| `estructural` | Estructural | `#F75000` | combate en edificios / búsqueda |
| `proximidad` | Proximidad ARFF | `#4A9ED4` | aeropuertos, combustibles |
| `forestal` | Forestal | `#34D399` | interfaz urbano-forestal |
| `usar` | USAR / Rescate | `#F5A623` | rescate técnico, RIT, personal |
| `mando` | Mando | `#A78BFA` | oficiales, grabación, documentación |
| `industrial` | Industrial | `#F5A623` | flash fire, inspección, larga duración |
| `cbrn` | CBRN / HAZMAT | `#2DD4BF` | agentes químicos/biológicos |
| `corte` | Corte / Cizalla | `#F75000` | cizallas de excarcelación |
| `separacion` | Separación | `#4A9ED4` | separadores hidráulicos |
| `combinada` | Combinada | `#F5A623` | herramientas combi 2-en-1 |
| `estabilizacion` | Empuje y Estabilización | `#34D399` | arietes, struts, estabilización |

## `BrandPage.astro` — secciones (orden canónico)

Las 13 marcas renderizan **idéntica** estructura (8 anchors de sección verificables: `lineas/catalogo/anat/comp/guia/seg/faq/cross-title`):

1. Breadcrumb (4 niveles)
2. Hero + barra de stats
3. `<QuickLinksBar />`
4. Credenciales (4 pilares)
5. Líneas de producto (con ícono por familia)
6. Catálogo (`ProductCard` por producto filtrado)
7. Anatomía del flagship (6 componentes)
8. Tabla comparativa (columnas por categoría)
9. Guía de selección (4 pasos)
10. Segmentos de operación (4 cuadrantes)
11. FAQ (5–6)
12. Banda CTA (naranja)
13. Cross-links (otras marcas hermanas + conjunto + categorías)

**Schemas JSON-LD** generados desde la data: `BreadcrumbList` (4 niveles) · `CollectionPage` con `ItemList` de los productos como nodos `Product`+`Offer` y `about: Brand` (con `foundingDate`/`parentOrganization`) · `FAQPage`.

## Hub dinámico → marcas (homologado)

`src/pages/productos/[categoria].astro` muestra una sección **"Catálogo por marca"** que linkea a las brand pages de cualquier categoría que las tenga:

```ts
const marcas = brandPages.filter((b) => b.categorySlug === cat.slug);
```

Cascos y trajes tienen hub **estático** propio (`cascos-nfpa/index.astro`, `trajes-bombero/index.astro`) con secciones de marca dedicadas; SCBA y cámaras usan el hub dinámico, que muestra las cards automáticamente. Añadir marcas a una categoría dinámica nueva NO requiere tocar el hub.

## Cómo añadir una marca (checklist)

1. **Producto(s)** en `src/data/products.ts` con `category`, `brand` y `specs` (sin `specs` no aparece en el catálogo de la brand page).
2. **Objeto `EquipmentBrand`** en la data file de su categoría (`<categoria>Brands.ts`), con `slug` ÚNICO.
3. **Registrar** la lista en `brandPages.ts` (si la categoría es nueva).
4. **Wrapper** `src/pages/productos/<categoria>/<slug>/index.astro` (6 líneas).
5. **Linkeo:** `navigation.ts` (children de la categoría) + `Footer.astro` (`sub:true`). El hub dinámico y los cross-links entre hermanas son automáticos.
6. **Verificar** (ver abajo).

## Cómo añadir una categoría nueva con marcas

1. Asegurar productos con esa `category` y `specs` en `products.ts`.
2. Extender claves de spec si hace falta: `Product.specs` (products.ts) + `ProductCard.astro` (chips) + `ComparativaRow` (brandPages.ts).
3. Añadir la entrada a `categoriaMarca['<slug>']` (label, productCategory, `comparativaCols`, conjunto).
4. Crear `src/data/<categoria>Brands.ts` con sus marcas y registrarla en `brandPages.ts`.
5. Wrappers + linkeo (nav/footer). El hub dinámico ya las muestra.

## Gotchas (importantes)

- **Slugs únicos en todo el registro.** `brandPageBySlug(slug)` busca en `brandPages` global. Una marca presente en dos categorías (p.ej. Bullard en cascos y cámaras) debe usar slugs distintos (`bullard` vs `bullard-txs`). El `brand` (filtro de productos) sí puede repetirse porque se desambigua por `category`.
- **Cast en JSX:** en `BrandPage.astro` el acceso dinámico debe ser `(row as any)[col.key]`. Un cast con genéricos `Record<…>` rompe el parser de Astro (lee los `<>` como tag JSX).
- **Sin import circular en runtime:** `brandPages.ts` importa las listas (runtime); las data files importan `EquipmentBrand` solo con `import type` (se borra en runtime). No invertir esto.
- **`getStaticPaths`:** los wrappers no usan getStaticPaths; pero si se crea una ruta dinámica, los helpers van en módulo externo e importados (ver [[02-arquitectura]] / nota Astro: el frontmatter no se hoistea en el build de producción).
- **Adaptación de cascos:** `cascosBrands.ts` mantiene su tipo local `CascoBrand`; se adapta a `EquipmentBrand` en `brandPages.ts` (`{...b, categorySlug, crossDesc}`) para no tocar el contenido ya validado.

## Estado actual — 16 marcas / 5 categorías

| Categoría | Marcas (slug) |
|---|---|
| Cascos NFPA | MSA Gallet (`msa-gallet`) · Bullard (`bullard`) · Cairns (`cairns`) |
| Trajes Bombero | Globe (`globe-manufacturing`) · Lion (`lion-apparel`) · Honeywell (`honeywell-morning-pride`) · Fire-Dex (`fire-dex`) |
| Equipos SCBA | MSA G1 (`msa-g1`) · Dräger PSS 7000 (`drager-pss`) · 3M Scott Air-Pak NxG7 (`scott-air-pak`) |
| Cámaras Térmicas | FLIR (`flir`) · MSA Evolution (`msa-evolution`) · Bullard TXS (`bullard-txs`) |
| Herramientas de Rescate | Holmatro (`holmatro`) · Hurst Jaws of Life (`hurst`) · Weber Rescue (`weber-rescue`) |

## Verificación (correr siempre)

```bash
npx astro check && npx astro build
# link-check + orphan-check (scripts exactos en 04-seo.md) → meta 0 rotos / 0 huérfanas
```

Meta: 0 errores TS, build limpio, 0 rotos, 0 huérfanas, las 16 marcas en 200. Homologación verificable: las 16 deben tener los 8 anchors de sección.

Relacionado: [[11-paginas-L4-marca]] · [[03-plantilla-pagina]] · [[04-seo]] · [[05-componentes]] · [[06-interlinking]] · [[02-arquitectura]]
