# Arquitectura del proyecto

Astro 4 estático (47 páginas) + Tailwind 3. Alias: `@components`, `@layouts`, `@data` (tsconfig).

## Estructura

```
src/
├── data/                 ← FUENTE ÚNICA DE VERDAD (editar aquí, no en componentes)
│   ├── site.ts           SITE (nombre, url, teléfono, whatsapp) + whatsappUrl(msg)
│   ├── navigation.ts     Menú del header (dropdowns Productos/Servicios/Industrias/Empresa)
│   ├── categories.ts     9 categorías: slug, label, norm, description (meta), shortDesc,
│   │                     accent, icon (SVG), intro[] (prose SEO), items[], productCategory
│   │                     Exports: categories (8), trajesBombero, allCategories (9)
│   ├── products.ts       featuredProducts (6) — alimenta fichas de producto y destacados
│   ├── services.ts       6 servicios
│   └── faqs.ts           homeFaqs (10) — acordeón + FAQPage schema (texto plano, sin HTML)
├── layouts/
│   ├── BaseLayout.astro  SEO + Header + <main> + QuickLinksBar footer + Footer + WhatsApp float
│   └── BlogLayout.astro  Posts del blog
├── components/
│   ├── common/           Header, Footer, SEO, TopBar, WhatsAppButton, QuickLinksBar
│   ├── home/             Secciones del index (14)
│   ├── products/         CategoryCard (card compartida), ProductCard (v1)
│   └── blog/             BlogCard (v1)
├── pages/
│   ├── index.astro       Home (14 secciones)
│   ├── productos/
│   │   ├── index.astro          Hub L2 (v2)
│   │   ├── [categoria].astro    8 páginas de categoría desde categories.ts
│   │   ├── [...producto].astro  6 fichas desde featuredProducts (schema Product)
│   │   └── trajes-bombero/      Página estática propia (v1, por migrar)
│   ├── servicios/ industrias/ blog/ + páginas de empresa (v1, por migrar)
│   └── aviso-privacidad / terminos-condiciones
└── styles/global.css     Design system v2 + capa compat v1
```

## Rutas dinámicas — cómo agregar contenido

- **Nueva categoría**: agregar objeto a `categories.ts` → genera `/productos/<slug>` automáticamente. Después: linkear (header/footer/cards) → [[06-interlinking]]
- **Nuevo producto destacado**: agregar a `featuredProducts` con `href: '/productos/<categoria>/<slug>'` → genera la ficha con schema Product automáticamente
- **Nueva FAQ**: `faqs.ts` → aparece en acordeón del home y en el FAQPage schema
- **Nuevo post**: `src/content/blog/*.md` con frontmatter del schema (`content/config.ts`) → home muestra los 3 más recientes (BlogTeasers)

## Comandos

```bash
npm run dev          # localhost:4321+
npx astro check      # type-check (debe dar 0 errors)
npm run build        # 47 páginas → dist/
```

Verificación post-build (0 rotos / 0 huérfanas): ver script en [[04-seo]].

Relacionado: [[03-plantilla-pagina]] · [[07-deploy]]
