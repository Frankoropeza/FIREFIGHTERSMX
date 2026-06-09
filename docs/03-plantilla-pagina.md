# Plantilla de página homologada (v2)

Anatomía obligatoria de toda página del sitio. Referencias vivas: `src/pages/productos/index.astro` (hub), `src/pages/productos/[categoria].astro` (categoría), `src/pages/productos/[...producto].astro` (detalle).

## Estructura vertical

```
1. Breadcrumb        nav py-3 bg #070E1A + BreadcrumbList schema
2. Hero              bg #040A12 · eyebrow + h1 (única) + prose SEO + CTAs (btn-primary + btn-ghost)
                     glow radial naranja decorativo + línea de acento inferior
3. QuickLinksBar     <QuickLinksBar />  ← SIEMPRE inmediatamente después del hero
4. Secciones         alternar fondos #040A12 / #070E1A · header 2-col (eyebrow+h2 | prose border-left)
5. Cross-links       "Otras categorías" / "También te puede servir" (botones btn-sm btn-dark)
6. (global, no tocar) QuickLinksBar variant="footer" + Footer — los pone BaseLayout
```

## Esqueleto de código

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import QuickLinksBar from '@components/common/QuickLinksBar.astro';
import { SITE, whatsappUrl } from '@data/site';

const canonicalURL = `${SITE.url}/ruta`;
const breadcrumbSchema = { /* BreadcrumbList — ver [[04-seo]] */ };
---
<BaseLayout
  title="Keyword Principal — FIREFIGHTERS MX"   <!-- ≤60 chars -->
  description="..."                              <!-- 140–160 chars, keyword + CTA -->
  canonicalURL={canonicalURL}
  schema={[breadcrumbSchema /*, otros */]}
>
  <nav aria-label="Breadcrumb">…</nav>
  <section> <!-- hero con h1 única --> </section>
  <QuickLinksBar />
  <section class="section" style="background:#070E1A">…</section>
  …
</BaseLayout>
```

## Checklist obligatorio (antes de dar por terminada una página)

- [ ] **h1 única** con keyword; h2 por sección con `aria-labelledby` o `aria-label`
- [ ] `title` y `description` **únicos** en todo el sitio; `canonicalURL` explícito
- [ ] Breadcrumb visible + `BreadcrumbList` schema
- [ ] `<QuickLinksBar />` bajo el hero
- [ ] Prose SEO: mínimo 2 párrafos con keywords y normas (NFPA/NOM) en el hero o primera sección
- [ ] Schema adicional según tipo → [[04-seo]]
- [ ] **Linkeo**: header (`navigation.ts`) + footer (`Footer.astro`) + ≥1 card contextual → [[06-interlinking]]
- [ ] Cards sin transiciones/animaciones → [[01-design-system]]
- [ ] CTAs: WhatsApp (`whatsappUrl('mensaje contextual')`) y/o `/cotizacion`
- [ ] `npx astro check` 0 errors + build + link-check 0 rotos/0 huérfanas

Relacionado: [[01-design-system]] · [[04-seo]] · [[06-interlinking]]
