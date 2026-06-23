import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://firefighters.mx',
  // Canonical: nunca slash final → evita duplicate content /productos/ vs /productos
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false, configFile: './tailwind.config.cjs' }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Las rutas reales se detectan solas; excluir 404
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    domains: ['firefighters.mx'],
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      exclude: ['@astrojs/image'],
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
