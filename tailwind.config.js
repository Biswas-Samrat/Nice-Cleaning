/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F2EA',
          50: '#FDFCF8',
          100: '#F6F2EA',
          200: '#EDE5D3',
        },
        skyblue: {
          DEFAULT: '#DCEAF0',
          100: '#DCEAF0',
          200: '#C4D8E3',
          300: '#8EBFD1',
          400: '#6AAEC4',
        },
        accent: {
          blue: '#8EBFD1',
          gold: '#C9A65A',
          sage: '#718778',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
          dark: '#1F2423',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
