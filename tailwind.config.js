/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#5A2A91",
          "purple-dark": "#35205F",
          "purple-light": "#F3EAF9",
          teal: "#20B7B0",
          "teal-light": "#DDF6F4",
          coral: "#E85A7A",
          yellow: "#F4C542",
          cream: "#FFF9F4",
          dark: "#1E1A2B",
        },
        soft: "#FFF9F4",
        cream: "#FFF9F4",
        dark: "#1E1A2B",
        charcoal: "#1E1A2B",
        "charcoal-dark": "#35205F",
        white: "#FFFFFF",
        border: "#E9DDEB",
        muted: "#625D68",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        display: ['"Playfair Display"', "serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(90, 42, 145, 0.10)",
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
