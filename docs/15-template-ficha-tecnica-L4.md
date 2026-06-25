# Template Ficha Técnica L4 — `[...producto].astro`

> **Archivo canónico:** `src/pages/productos/[...producto].astro`
> **Ruta de ejemplo:** `/productos/trajes-bombero/globe-gxtreme-3`
> **Tipo de página:** Catch-all dinámico — genera una ficha por cada entrada en `featuredProducts` que tenga `specs` definidos
> **Última actualización:** 2026-06-24

---

## 1. Propósito y posición en la arquitectura

El template L4 es la **ficha técnica de producto individual** — el nivel más profundo del catálogo. Se genera automáticamente para los ~101 productos en `src/data/products.ts` que tienen el campo `specs` definido.

Jerarquía de navegación:
```
/ (home)
└── /productos (L1 catálogo)
    └── /productos/trajes-bombero (L2 hub de categoría)
        └── /productos/trajes-bombero/globe-manufacturing (L3 brand page)
            └── /productos/trajes-bombero/globe-gxtreme-3 (L4 ficha técnica ← ESTE TEMPLATE)
```

---

## 2. Fuente de datos

### Interface `Product` (`src/data/products.ts`)

```typescript
export interface Product {
  slug: string;           // e.g. "globe-gxtreme-3-estructural"
  title: string;          // e.g. "Globe G-XTREME 3.0"
  description: string;    // 1-2 oraciones SEO
  category: string;       // "Trajes Bombero" | "Cascos NFPA" | "Equipos SCBA" | ...
  brand?: string;         // "Globe Manufacturing" | "MSA Safety" | ...
  norm?: string;          // "NFPA 1970" | "NFPA 1981" | ...
  badge?: string;         // "Más solicitado MX" | "Nuevo 2025" | ...
  image?: string;         // "/images/productos/traje-globe-gx7-estructural-1.avif"
  href: string;           // "/productos/trajes-bombero/globe-gxtreme-3"
  tier?: string;          // "Tier 1 · Internacional" | "Tier 2 · Regional"
  highlight?: boolean;    // true = producto destacado
  specs?: {               // specs por categoría — ver sección 3
    tpp?: string; thl?: string; outer?: string; weight?: string; extra?: string;
    norma?: string; material?: string; protector?: string; suspension?: string; peso?: string;
    autonomia?: string; cilindro?: string; electronica?: string;
    resolucion?: string; sensor?: string;
    fuerza?: string; rango?: string; fuente?: string;
    tipo_sis?: string; cobertura?: string; listado?: string; ideal?: string;
    nivel_haz?: string; barrera?: string; gases?: string;
  };
  features?: string[];    // hasta 3-4 bullets de características clave
}
```

### Categorías válidas y sus specs

| Categoría | Campos `specs` principales |
|-----------|---------------------------|
| `Trajes Bombero` | `tpp`, `thl`, `outer`, `weight` |
| `Cascos NFPA` | `norma`, `material`, `protector`, `suspension`, `peso` |
| `Equipos SCBA` | `autonomia`, `cilindro`, `electronica` |
| `Cámaras Térmicas` | `resolucion`, `sensor` |
| `Equipos HAZMAT` | `nivel_haz`, `barrera`, `gases` |
| `Herramientas Rescate` | `fuerza`, `rango`, `fuente` |
| `Sistemas CI` | `tipo_sis`, `cobertura`, `listado`, `ideal` |

---

## 3. Estructura del template (de arriba a abajo)

### 3.1 Breadcrumb `<nav>` — ancho completo
```
Inicio / Productos / {category} / {brand}? / {title}
```
- Estilo: `background:#070E1A`, `border-bottom: 1px solid rgba(74,117,153,0.15)`
- 5 niveles máximo. El nivel de marca sólo aparece si `brandPath` existe.
- `flex items-center flex-wrap gap-2 text-xs`
- Schema JSON-LD: `BreadcrumbList` inyectado via `BaseLayout`

### 3.2 Hero `<section>` — ancho completo
**CSS exacto del sitio** (no modificar):
```html
<section class="relative overflow-hidden"
         style="background:#040A12;padding-block:5rem">
```

**Glow top-right:**
```html
<div class="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
     style="background:radial-gradient(ellipse 80% 70% at 90% 30%,
            rgba(247,80,0,0.08) 0%, transparent 65%)">
```

**Grid 2 columnas:**
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
```

**Columna izquierda:**
- `section-eyebrow`: `{brand} · {norm} · {tier}` (filtered)
- `<h1>` uppercase `font-display font-bold`, `clamp(2.5rem,5.5vw,4.5rem)`, `line-height:0.95`
  - Primera palabra: blanco; resto: `color:#F75000`
- `<p>` descripción: `text-sm leading-relaxed`; + "Certificado **{norm}**. Distribuidor autorizado."
- CTAs: "Cotizar por WhatsApp →" (`btn btn-primary btn-lg`) + "Ver catálogo {brand}" (`btn btn-ghost btn-lg`)

**Columna derecha** (`class="lg:pl-16"` + `border-left:1px solid rgba(74,117,153,0.1)`):
- Dos párrafos `text-sm leading-[1.9] mb-5 color:#94A3B8`
  - **Para 1:** `{title}` es la referencia `{tier}` de `{brand}` — incluye descripción + specs resumen + certificación
  - **Para 2:** Distribuidores autorizados — dossier documental para licitaciones
- Generados dinámicamente desde `introPara1` / `introPara2` en frontmatter

**Línea naranja bottom:**
```html
<div class="absolute bottom-0 left-0 right-0 h-px"
     style="background:linear-gradient(90deg, transparent,
            rgba(247,80,0,0.4) 30%, rgba(247,80,0,0.4) 70%, transparent)">
```

### 3.3 QuickLinksBar — ancho completo
`<QuickLinksBar />` — componente estándar del sitio.

### 3.4 Layout principal: Main + Sidebar

**Container:**
```html
<div style="background:#070E1A">
  <div class="container-site" style="padding-block:3.5rem">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
```

#### MAIN (columna izquierda, `flex flex-col gap-8`)

**A) Galería 3×2**
- Grid `grid-cols-3 gap-1.5`
- 6 imágenes: `product.image` + 5 de otros productos de la **misma categoría** con imagen
- Figura 1: `loading="eager"` + badge del producto si existe
- Resto: `loading="lazy"`
- Si hay menos de 6 imágenes reales → placeholders dark con SVG
- Pie de galería: `{category} · {brand} · Distribuidor autorizado México`
- Computed en frontmatter: `galleryImages` (array de `{src, alt}`, max 6)

**B) Descripción técnica + Specs table**
- Header card: `section-eyebrow` + H2 "Descripción técnica del equipo."
- 2-3 párrafos: descripción del producto, contexto de distribución, contexto de marca
- CTA: "Solicitar ficha técnica →"
- Specs table 3 columnas: **Parámetro | Valor | Referencia** (qué significa el número)
- Benchmark box: si el spec tiene `min` y/o `alto` → fila "Mín NFPA: X | Este modelo: Y | Alta perf: Z"
- Computed: `specRows` (array de `{label, val, explica, min?, alto?}`)

**C) Características** (solo si `product.features` existe)
- Header: `section-eyebrow` + H2 "Lo que distingue a este equipo."
- Grid `grid-cols-3` (o `grid-cols-2` si solo hay 2 features)
- Cada feature: card con `border-top:3px solid {color}`, ícono check, texto
- Colores rotativos: `#F75000`, `#F5A623`, `#34D399`, `#60A5FA`, `#A78BFA`

**D) Aplicaciones y casos de uso**
- Header: "Aplicaciones y casos de uso."
- Grid 2 columnas:
  - Izq (verde `#34D399`): "✓ Ideal para" — lista de 5-6 escenarios
  - Der (ámbar `#F5A623`): "⚠ A considerar" — lista de 3-4 limitaciones/advertencias
- Footer del panel der: link "Consulta técnica gratuita →" WhatsApp
- Computed: `useCases` desde `catUseCases[product.category]` — mapeado para 7 categorías

**E) Documentación para licitación**
- Header: "Todo lo que necesitas para la licitación."
- Texto: dossier CompraNet, IMSS, gobiernos, corporativos; respuesta <24h
- 4 docs en grid 2×2: Certificado NFPA, Ficha técnica oficial, Carta distribuidor, Garantía fábrica
- CTAs: "Solicitar dossier completo →" + "Cotización formal"

#### SIDEBAR (columna derecha, 340px, `position:sticky;top:1.5rem`)

Los 7 bloques del sidebar (en orden):

| # | Bloque | Contenido |
|---|--------|-----------|
| 1 | **CTA Cotizar** | Fondo naranja `#F75000`. Título producto + norma. Botón WhatsApp blanco. Link cotización formal. |
| 2 | **Especificaciones rápidas** | Lista: `{specLabel}: {value}` en dos columnas por fila. Fondo `#080F1A`. |
| 3 | **Más de {brand}** | Hasta 5 productos misma marca+categoría. Thumbnail 48×48 + título + norma + flecha. Link "Ver catálogo completo" al final. |
| 4 | **Más en {category}** | Hasta N productos misma categoría, excluyendo ya mostrados en bloque 3. Thumbnail 40×40. |
| 5 | **Otras categorías** | Grid 2 columnas con las otras categorías de `categories.ts`. Ícono SVG + nombre. |
| 6 | **Artículos relacionados** | 4 links de blog por categoría. Label + descripción corta. Computed: `sidebarArticulos` desde `catArticulos[product.category]`. |
| 7 | **¿Necesitas asesoría?** | `border-top:2px solid #F75000`. Texto + botón WhatsApp + link `/certificaciones`. |

### 3.5 Brand strip — ancho completo
Solo renderiza si `brandPath` existe.
```
{brand} · Catálogo completo de modelos → [Ver todos los modelos {brand}]
```
Estilo: `background:#070E1A`, `border-top:1px solid rgba(74,117,153,0.15)`

### 3.6 Relacionados — ancho completo
Grid `grid-cols-4` de productos relacionados.
- Primero: mismo brand + misma categoría (hasta 2)
- Luego: misma categoría distinto brand (hasta 2 más)
- Card: imagen 4:3 + badge chips + título + descripción (2 líneas) + spec chips (3 primeras) + "Ver detalles →"
- Computed: `related` (max 4)

---

## 4. Variables computadas en frontmatter

```typescript
// Navegación
const categoryPath   // "/productos/trajes-bombero"
const brandSlug      // "globe-manufacturing"
const brandPath      // "/productos/trajes-bombero/globe-manufacturing" | null

// Hero
const h1line1        // "Globe" (primera palabra)
const h1line2        // "G-XTREME 3.0" (resto — en naranja)
const introPara1     // párrafo 1 derecho del hero (generado)
const introPara2     // párrafo 2 derecho del hero (generado)
const heroParas      // [introPara1, introPara2]

// Specs
const specMeta       // Record<string, {label, explica, min?, alto?}> — 20+ keys
const specRows       // [{label, val, explica, min?, alto?}] — computed desde product.specs

// Galería
const galleryImages  // [{src, alt}] — 1 principal + 5 de misma categoría, max 6

// Contenido
const useCases       // {si: string[], considera: string[]} — mapeado por categoría
const catArticulos   // Record<category, SbArt[]> — artículos de blog por categoría

// Sidebar
const sidebarBrandProds  // productos misma marca+cat, excl. actual, max 5
const sidebarCatProds    // productos misma cat, excl. brandProds, max N
const sidebarCats        // categories[] excl. actual (para "Otras categorías")
const sidebarArticulos   // SbArt[] — artículos del sidebar

// Relacionados
const relatedBrand   // hasta 2 misma marca+cat
const relatedCat     // hasta 2 misma cat sin brand match
const related        // [...relatedBrand, ...relatedCat].slice(0,4)

// SEO
const seoTitle       // "{title} {norm} — {brand} · FIREFIGHTERS MX"
const seoDesc        // 158 chars max
const productSchema  // JSON-LD Product
const breadcrumbSchema // JSON-LD BreadcrumbList
```

---

## 5. SEO por página

```typescript
title:       `${product.title} ${product.norm} — ${product.brand} · FIREFIGHTERS MX`
description: `${product.description} Distribuidor autorizado ${product.brand} en México. ${product.norm} certificado...`
canonical:   `${SITE.url}${product.href}`
ogType:      "product"
schemas:     [Product, BreadcrumbList]
```

**Schema Product fields:** `name`, `description`, `url`, `category`, `image`, `brand.name`, `offers.{priceCurrency:MXN, availability:InStock, seller.name}`

---

## 6. Checklist para agregar un producto nuevo

```
[ ] Agregar entrada en src/data/products.ts con:
    [ ] slug único (kebab-case + sufijo categórico)
    [ ] title, description, category (string exacto), brand, norm
    [ ] badge?, tier?, highlight?, image?
    [ ] href: "/productos/{cat-slug}/{product-slug}"
    [ ] specs: { campos específicos de la categoría }
    [ ] features: [ 2-3 bullets ]
[ ] Imagen avif en /public/images/productos/ (ratio 4:3 recomendado)
[ ] Verificar que category coincide exactamente con el string de catUseCases
[ ] npx astro build — 0 errores
[ ] Verificar que la ficha genera en /dist/productos/{cat}/{slug}/
[ ] Verificar que aparece en sidebar de productos relacionados en su misma categoría
```

---

## 7. Mapas de datos por categoría

### `catUseCases` — casos de uso (sidebar `useCases`)
Clave = `product.category` exacto. Estructura `{si: string[], considera: string[]}`.
Categorías mapeadas: `Trajes Bombero`, `Cascos NFPA`, `Equipos SCBA`, `Cámaras Térmicas`, `Equipos HAZMAT`, `Herramientas de Rescate`, `Sistemas Contra Incendio`.

### `catArticulos` — artículos de blog (sidebar artículos)
Clave = `product.category` exacto. Estructura `{label, desc, href}[]` (4 artículos por categoría).
Mismas 7 categorías mapeadas. Fallback genérico para categorías no mapeadas.

### `specMeta` — metadatos de specs
20+ claves: `tpp`, `thl`, `outer`, `weight`, `extra`, `norma`, `material`, `protector`, `suspension`, `peso`, `autonomia`, `cilindro`, `electronica`, `resolucion`, `sensor`, `fuerza`, `rango`, `fuente`, `tipo_sis`, `cobertura`, `listado`, `ideal`, `nivel_haz`, `barrera`, `gases`.

---

## 8. Reglas de diseño (no romper)

1. **Hero = idéntico al resto del sitio.** `padding-block:5rem`, radial glow top-right, grid 2-col, col-der `lg:pl-16 border-left`. Nunca imágenes en el hero — solo párrafos texto.
2. **Galería = 3×2 siempre.** Si hay menos de 6 imágenes reales → placeholders. Imagen 1 = producto actual.
3. **Sidebar = sticky `top:1.5rem`.** No cambiar el orden de los 7 bloques.
4. **Specs table = 3 columnas** (Parámetro | Valor naranja | Referencia explicativa). La columna referencia da contexto — no eliminar.
5. **Benchmark box** solo aparece si algún spec tiene `min` o `alto` en `specMeta`.
6. **CTA sidebar = fondo naranja puro `#F75000`** con botón blanco. Es el único elemento naranja sólido de la página.
7. **Brand strip** solo si el producto tiene brand con página L3 válida (`brandPath !== null`).
8. **Relacionados**: brand primero, luego cat. Si no hay 4, dejar los que haya — no rellenar con productos sin specs.

---

## 9. Gotchas y errores conocidos

| Situación | Problema | Solución |
|-----------|----------|----------|
| `product.category` con acento distinto | `catUseCases` no encuentra key → fallback genérico | Usar los strings exactos de `products.ts` |
| Producto sin `specs` | `getStaticPaths` lo incluye igual — el template renderiza vacío los bloques opcionales | Normal — specs es opcional |
| Imagen no avif | Puede ser jpg/png/webp — el campo es `string` libre | Preferir avif para performance |
| Build EPERM en sandbox | `astro build` falla en node_modules/.vite del mount | Copiar a `/tmp/ffbuild` y compilar ahí |
| `p.image!` en galleryImages | TypeScript no-null assertion necesaria tras filtrar por `p.image` | Ya está en el código |

---

## 10. Ejemplo de entrada de producto mínimo viable

```typescript
{
  slug: "msa-gallet-f1-xf-estructural",
  title: "MSA Gallet F1 XF",
  description: "Casco estructural europeo de fibra de vidrio certificado NFPA 1970. Visor retráctil interno, protección nucal articulada y módulos intercambiables de lámpara y comunicación.",
  category: "Cascos NFPA",
  brand: "MSA Safety",
  norm: "NFPA 1970",
  badge: "Más solicitado MX",
  image: "/images/productos/casco-msa-gallet-f1xf-estructural.avif",
  href: "/productos/cascos-nfpa/msa-gallet-f1-xf",
  tier: "Tier 1 · Internacional",
  highlight: true,
  specs: {
    norma: "NFPA 1970 · EN 443",
    material: "Fibra de vidrio",
    protector: "Visor retráctil interno + ocular",
    suspension: "Ratchet 8 puntos",
    peso: "~1.45 kg",
  },
  features: [
    "Carcasa de fibra de vidrio: 35% más ligera que composite estándar",
    "Sistema modular de lámpara, comunicación y cámara sin modificar la certificación",
    "Compatibilidad verificada con MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak",
  ],
}
```

---

## 11. Links relacionados en este vault

- [[02-arquitectura]] — cómo funciona `[...producto].astro` como catch-all
- [[03-plantilla-pagina]] — checklist de elementos obligatorios en toda página
- [[04-seo]] — schemas JSON-LD y metadatos
- [[14-sistema-brandpage]] — BrandPage.astro que precede a las fichas L4
- [[01-design-system]] — tokens de color, tipografía y clases CSS

---

*Template estabilizado: 2026-06-24 · URL ejemplo: `/productos/trajes-bombero/globe-gxtreme-3`*
