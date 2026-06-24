# Páginas L4 — Marcas de Trajes de Bombero

> ⚠️ **DOCUMENTO HISTÓRICO (jun 2026).** Estas 4 páginas dejaron de ser archivos standalone: hoy se renderizan con el **sistema unificado** → ver **[[14-sistema-brandpage]]**. Se conserva este doc como referencia del blueprint original (secciones canónicas, datos por marca). El contenido vive ahora en `src/data/trajesBrands.ts`.

Documentación del sistema de páginas de marca (nivel L4) para la categoría `/productos/trajes-bombero/`. Cuatro páginas estáticas que detallan el portafolio de cada fabricante distribuido por FIREFIGHTERS MX.

## Jerarquía de URLs

```
L1  /                                              Home
L2  /productos                                     Catálogo hub
L3  /productos/trajes-bombero                      Categoría (hub de marca)
L4  /productos/trajes-bombero/globe-manufacturing  Página de marca ← este documento
    /productos/trajes-bombero/lion-apparel
    /productos/trajes-bombero/honeywell-morning-pride
    /productos/trajes-bombero/fire-dex
L5  (futuro) /productos/trajes-bombero/[marca]/[modelo]  Ficha técnica individual
```

## Marcas activas (L4 completas)

| Marca | URL | Slug | Líneas |
|---|---|---|---|
| Globe Manufacturing | `/productos/trajes-bombero/globe-manufacturing` | `globe-manufacturing` | Estructural · Proximity ARFF · Forestal |
| Lion Apparel | `/productos/trajes-bombero/lion-apparel` | `lion-apparel` | Estructural · ARFF Proximity · Forestal |
| Honeywell Morning Pride | `/productos/trajes-bombero/honeywell-morning-pride` | `honeywell-morning-pride` | Estructural · ARFF Proximity · CarbonX Proximity · CBRN |
| Fire-Dex | `/productos/trajes-bombero/fire-dex` | `fire-dex` | Estructural TECGEN71 · TECGEN51 · H71 Hybrid · Proximity FXR |

## Anatomía canónica (orden obligatorio)

Todas las páginas L4 de marca siguen esta estructura en este orden exacto. No reordenar ni omitir secciones.

```
1.  Breadcrumb           nav py-3 bg #070E1A · BreadcrumbList schema
2.  Hero                 bg #040A12 · 2 columnas · stats bar al pie
3.  QuickLinksBar        <QuickLinksBar /> — siempre inmediatamente después
4.  Credenciales         4 pilares de confianza · grid 4-col · bg #070E1A
5.  Líneas de producto   3 ó 4 columnas según la marca · bg #040A12
6.  Catálogo             6 ProductCards · grid 3-col · bg #070E1A
7.  Tabla comparativa    todos los modelos cara a cara · bg #040A12
8.  Segmentos industria  4 cuadrantes 2×2 · bg #040A12
9.  FAQ                  2 columnas (copy izq. · accordion der.) · bg #070E1A
10. CTA band             fondo naranja sólido #F75000 · copy + 2 botones
11. Cross-links          otras marcas + también te puede servir + categorías
```

## Esquemas JSON-LD por página

Todas las páginas L4 incluyen los tres schemas:

```typescript
schema={[breadcrumbSchema, collectionSchema, faqSchema]}
```

- **BreadcrumbList**: 4 niveles (Inicio › Productos › Trajes para Bomberos › [Marca])
- **CollectionPage**: `#collection` con `mainEntity: ItemList` de los N productos filtrados
- **FAQPage**: 5 preguntas técnicas por marca, en español técnico

## Estructura del frontmatter (template)

```typescript
---
import BaseLayout from '@layouts/BaseLayout.astro';
import QuickLinksBar from '@components/common/QuickLinksBar.astro';
import ProductCard from '@components/products/ProductCard.astro';
import { featuredProducts } from '@data/products';
import { SITE, whatsappUrl } from '@data/site';

const canonicalURL = `${SITE.url}/productos/trajes-bombero/[slug]`;

/* Filtro de productos por marca */
const brandProducts = featuredProducts.filter(
  (p) => p.brand === '[Nombre exacto en products.ts]' && p.specs
);

/* Schemas: breadcrumbSchema, collectionSchema, faqSchema */

/* Datos de sección */
const stats      = [/* 4 items: { valor, etiq } */];
const credenciales = [/* 4 items: { n, t, d } */];
const lineas     = [/* 3-4 items: { badge, badgeColor, titulo, modelos, desc, tech } */];
const comparativa = [/* N modelos: { modelo, tipo, shell, tpp, thl, peso, ideal, rec } */];
const segmentos  = [/* 4 items: { num, titulo, desc, modelos, color } */];
const faqs       = [/* 5 items: { q, a } */];
---
```

## Datos canónicos de cada marca

### Globe Manufacturing

```typescript
stats = [
  { valor: '1887',       etiq: 'Año de fundación' },
  { valor: '#1',         etiq: 'Marca más licitada en México' },
  { valor: 'MSA Safety', etiq: 'Grupo industrial · NYSE: MSA' },
  { valor: '32',         etiq: 'Estados con cobertura' },
];
```

**Credencial diferenciadora**: La más licitada en México · Trazabilidad NFPA 1850 · Stock CDMX 24–48 h · GORE-TEX CrossTech® PFAS-free

### Lion Apparel

```typescript
stats = [
  { valor: '1889',      etiq: 'Año de fundación' },
  { valor: 'NFPA 1971', etiq: '+ NFPA 1977 certificados' },
  { valor: '2°',        etiq: 'Marca más licitada en MX' },
  { valor: '32',        etiq: 'Estados con cobertura' },
];
```

**Credencial diferenciadora**: V-Force® ergonómico patentado · 135 años · 2° en licitaciones MX · Tallaje custom 8–12 sem

### Honeywell Morning Pride

```typescript
stats = [
  { valor: '1926',       etiq: 'Año de fundación' },
  { valor: 'NFPA 1971',  etiq: '+ 2112 + CBRN certificados' },
  { valor: 'Pemex/CFE',  etiq: 'Referencia en petroquímica' },
  { valor: '4',          etiq: 'Líneas de protección' },
];
```

**Credencial diferenciadora**: BioClad® CBRN · CarbonX® para refinerías · ATEX disponible · Referencia Pemex/CFE

### Fire-Dex

```typescript
stats = [
  { valor: 'TECGEN®',   etiq: 'Fibra sintética exclusiva' },
  { valor: '~3.5 kg',   etiq: 'El traje NFPA 1971 más ligero' },
  { valor: 'PFAS-free', etiq: 'Nativo desde el shell' },
  { valor: '2023–25',   etiq: 'Marca de mayor crecimiento MX' },
];
```

**Credencial diferenciadora**: TECGEN® 51/71 más ligeros que Nomex · THL ≥ 165 W/m² · PFAS-free nativo · Challenger brand en crecimiento

## Colores de acento por línea (badgeColor)

| Tipo de riesgo | Color | Uso |
|---|---|---|
| Estructural NFPA 1971 | `#F75000` | Badge naranja estándar |
| Proximity ARFF / ICAO | `#4A9ED4` | Badge azul |
| Forestal NFPA 1977 | `#34D399` | Badge verde |
| Industrial / Flash fire | `#F5A623` | Badge ámbar |
| CBRN / HAZMAT | `#34D399` | Badge verde |

## Tabla comparativa — campos requeridos

```typescript
type ComparativaRow = {
  modelo: string;
  tipo: 'Estructural' | 'Proximidad' | 'Proximidad industrial' | 'Forestal' | 'Estructural + CBRN';
  shell: string;   // e.g. 'PBI Matrix', 'Nomex NXT', 'TECGEN® 71'
  tpp: string;     // e.g. '≥ 35' (cal/cm²) o '>90% refl.'
  thl: string;     // e.g. '≥ 130' (W/m²) o '—'
  peso: string;    // e.g. '~4.5 kg' o '—'
  ideal: string;   // descripción breve del escenario ideal
  rec: boolean;    // true → muestra badge "★ Recomendado"
};
```

Exactamente un `rec: true` por tabla (el modelo de mayor demanda en México).

## Linkeo obligatorio (checklist por página nueva)

- [ ] `src/data/navigation.ts` — agregar `children` al ítem "Trajes para Bomberos"
- [ ] `src/components/common/Footer.astro` — agregar con `sub: true` en sección Productos
- [ ] `src/pages/productos/trajes-bombero/index.astro` — agregar CTA card con dual button (página marca + WhatsApp)
- [ ] Cross-links en la propia página — apuntar a las otras 3 marcas por URL específica (NO `/productos/trajes-bombero` genérico)

## FAQ — guía de tono

Las 5 FAQs por marca deben hablar "en el idioma del técnico de compras":

- 1–2 preguntas de comparación directa contra otras marcas (honest, technical)
- 1 pregunta sobre la norma más específica de esa marca (ATEX, CBRN, NFPA 2112, NFPA 1977...)
- 1 pregunta de ciclo de vida / NFPA 1850
- 1 pregunta de disponibilidad / licitación

## Checklist antes de publicar

- [ ] `npx astro check` — 0 errores TypeScript
- [ ] `npm run build` — build limpio
- [ ] Link-check — 0 rotos, 0 huérfanas
- [ ] Cross-links apuntan a URLs específicas de marca (no genéricas)
- [ ] `rec: true` presente en exactamente 1 fila de la tabla
- [ ] Stats bar visible en hero
- [ ] CTA band naranja presente

Relacionado: [[03-plantilla-pagina]] · [[04-seo]] · [[06-interlinking]] · [[10-plantilla-L3-producto]]
