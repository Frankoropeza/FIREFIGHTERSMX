/* Tailwind v3 vía PostCSS — reemplaza @astrojs/tailwind (deprecado, rompe Astro 6).
   Lee tailwind.config.cjs de la raíz; autoprefixer replica lo que hacía la integración. */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
