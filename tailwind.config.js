/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',        // Preto sofisticado
        secondary: '#c9a961',      // Dourado champagne
        accent: '#2d3748',         // Cinza carvão
        success: '#059669',        // Verde esmeralda
        warning: '#d97706',        // Âmbar
        danger: '#dc2626',
        dark: '#0a0a0a',          // Preto profundo
        gold: {
          50: '#fdfbf7',
          100: '#f9f5eb',
          200: '#f0e6cd',
          300: '#e7d7af',
          400: '#d5b973',
          500: '#c9a961',          // Main gold
          600: '#b8954a',
          700: '#9a7a3d',
          800: '#7c6231',
          900: '#5e4a25',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['42px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #c9a961 0%, #d5b973 100%)',
      },
    },
  },
  plugins: [],
}
