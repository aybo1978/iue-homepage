/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        paragraph: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F7F5F2',
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#2D4A3E',
          foreground: '#F7F5F2',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          foreground: '#F7F5F2',
        },
        accent: {
          gold: '#C9A96E',
        },
        destructive: {
          DEFAULT: '#DC2626',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
