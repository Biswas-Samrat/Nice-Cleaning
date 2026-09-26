/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#E83F82",
          "pink-light": "#FFF4F8",
          "pink-dark": "#C92F69",
          blush: "#FFF8FB",
          dark: "#C92F69",
        },
        blush: "#FFF4F8",
        soft: "#FFF8FB",
        dark: "#171717",
        white: "#FFFFFF",
        border: "#F1D9E3",
        muted: "#555555",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        display: ['"Playfair Display"', "serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(232, 63, 130, 0.08)",
      },
      animation: {
        "slide-in": "slideIn 0.3s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
