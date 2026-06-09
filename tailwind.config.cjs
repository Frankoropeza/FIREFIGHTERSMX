/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        fire: {
          red:      '#E10A1A',
          dark:     '#A80000',
          light:    '#FF2A37',
          bg:       '#FDECEE',
          accent:   '#FF6B1A',
        },
        ink: {
          900: '#0A0A0A',
          800: '#181818',
          700: '#303030',
          600: '#606060',
          500: '#787878',
          400: '#A8A8A8',
          300: '#C0C0C0',
          200: '#D8D8D8',
          100: '#F0F0F0',
          50:  '#F8F8F8',
        },
      },
      maxWidth: {
        site: '1440px',
      },
      aspectRatio: {
        'card': '16 / 10',
      },
      borderRadius: {
        card: '0.75rem',
        btn:  '0.5rem',
      },
      boxShadow: {
        card:         '0 1px 3px rgb(0 0 0 / 0.08), 0 4px 12px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 6px rgb(0 0 0 / 0.1), 0 10px 20px rgb(0 0 0 / 0.08)',
        elevated:     '0 10px 40px rgb(0 0 0 / 0.12)',
        fire:         '0 4px 12px rgb(225 10 26 / 0.3)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'tactical':      'linear-gradient(135deg, #000000 0%, #1a0000 30%, #2d0808 55%, #0a0a0a 100%)',
        'fire-gradient': 'linear-gradient(135deg, #E10A1A 0%, #A80000 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
