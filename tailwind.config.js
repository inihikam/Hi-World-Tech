/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        primary: '#06b6d4',
        secondary: '#8b5cf6',
        'text-primary': '#fafafa',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        border: '#27272a',
        overlay: '#00000080'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '8': '32px',
        '16': '64px',
        '24': '96px'
      },
      borderRadius: {
        'lg': '8px',
        'md': '6px',
        'xl': '12px'
      }
    }
  },
  plugins: []
};
