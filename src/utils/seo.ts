export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  schemas?: object[];
}

/** Truncate a string to maxLen, appending '…' if needed */
export function truncate(str: string, maxLen = 160): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + '…';
}

/** Generate a breadcrumb JSON-LD schema */
export function buildBreadcrumbSchema(
  crumbs: { name: string; url: string }[],
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Generate an Article JSON-LD schema */
export function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Person', name: opts.author ?? 'FIREFIGHTERS MX' },
    publisher: {
      '@type': 'Organization',
      name: 'FIREFIGHTERS MX',
      logo: { '@type': 'ImageObject', url: 'https://firefightersmx.com/logo.svg' },
    },
  };
}

/** Generate a Product JSON-LD schema */
export function buildProductSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
  sku?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    brand: opts.brand ? { '@type': 'Brand', name: opts.brand } : undefined,
    sku: opts.sku,
    offers: {
      '@type': 'Offer',
      url: opts.url,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'FIREFIGHTERS MX' },
    },
  };
}
