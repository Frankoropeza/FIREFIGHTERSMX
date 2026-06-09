# Design System v2 — "Forge & Protect"

Fuente: `src/styles/global.css` (tokens + clases) y `tailwind.config.cjs` (paletas Tailwind).
Concepto: **navy profundo + naranja eléctrico**, estética técnica/angular, dark-first.

## Tokens de color (CSS variables)

| Token | Hex | Uso |
|---|---|---|
| `--forge-900` | `#040A12` | Fondo base del sitio (body, secciones impares) |
| `--forge-800` | `#070E1A` | Secciones alternas, barras (QuickLinksBar, breadcrumb) |
| `--forge-700` | `#0C1825` | Superficie de cards / `grid-cell` |
| `--forge-600` | `#122133` | Hover de `grid-cell`, fila destacada |
| `--forge-300` | `#4A7599` | Texto muted frío (eyebrows secundarios, breadcrumb) |
| `--ember-500` | `#F75000` | **Acento principal** (CTAs, highlights de títulos) |
| `--ember-400` | `#FF6B26` | Hover de links/acentos |
| `#FF8F57` | — | Links inline sobre fondo oscuro |
| `--gold-500` | `#F5A623` | Acento secundario (badges, cards alternas) |
| `#34D399` | — | Verde éxito (checks, métricas, tiempos) |
| `#94A3B8` | — | Párrafo estándar sobre oscuro |
| `#64748B` | — | Párrafo secundario / descripciones de cards |

Bordes estándar: `1px solid rgba(74,117,153,0.15–0.25)` según jerarquía.

## Tipografía

- Display/headings: **Rajdhani** (600/700) — uppercase en h1/eyebrows/botones
- Body: **Sora** (300–700)
- Carga: `<link>` en `BaseLayout.astro` con preconnect (NO usar `@import` en CSS — bloquea render)
- Tailwind: `font-display` → Rajdhani, `font-sans` → Sora (sincronizado en tailwind.config)

## Clases del sistema (global.css)

- Layout: `container-site` (max 1600px), `section` (5rem), `section-tight` (3rem), `section-wide` (7rem)
- `section-eyebrow` — chip naranja uppercase sobre títulos de sección
- Botones: `btn` + `btn-primary` / `btn-dark` / `btn-ghost` / `btn-outline` / `btn-whatsapp` / `btn-gold`; tamaños `btn-lg` / `btn-sm`
- Cards: `grid-cell` (celda de grids full-width, hover bg instantáneo), `card`/`card-fire` (estáticas), `cat-card` (en CategoryCard)
- Badges: `badge` + `badge-fire` / `badge-dark` / `badge-gold` / `badge-green`
- Forms: `input`, `select`, `textarea`, `label`
- Compat v1 (páginas interiores sin migrar): `section-title`, `section-subtitle`, `bg-gradient-fire`, paleta `dark-*`/`fire-*` numérica → ver [[08-pendientes]]

## ⚠️ Reglas duras

1. **Animaciones y transiciones SOLO en botones** (`.btn*`, botón flotante WhatsApp). Cards, links, inputs y celdas: hover **instantáneo** (cambio de color/fondo sin `transition`), sin `transform`, sin `animate-*`, sin keyframes.
2. Prohibido `onmouseover`/`onmouseout` inline — usar clases CSS (`grid-cell`, `cat-card`).
3. No usar `localStorage` ni JS innecesario; el único JS global es el menú móvil del Header.
4. Patrón de header de sección (2 columnas): izquierda eyebrow + h2 con segunda línea naranja; derecha prose con `border-left:2px solid rgba(247,80,0,0.4)`.
5. Grids "full-width ledger": celdas con bordes `rgba(74,117,153,0.18)`, sin gap, o `gap-px` con fondo de borde.

Relacionado: [[03-plantilla-pagina]] · [[05-componentes]]
