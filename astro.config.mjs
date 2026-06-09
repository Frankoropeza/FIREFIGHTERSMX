import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://firefightersmx.com',
  integrations: [
    tailwind({ applyBaseStyles: false, configFile: './tailwind.config.cjs' }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://firefightersmx.com/productos/trajes-bombero',
        'https://firefightersmx.com/productos/scba',
        'https://firefightersmx.com/productos/herramientas-rescate',
        'https://firefightersmx.com/servicios/capacitacion',
        'https://firefightersmx.com/servicios/brigadas-empresariales',
        'https://firefightersmx.com/servicios/licitaciones',
      ],
    }),
  ],
  image: {
    domains: ['firefightersmx.com'],
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
