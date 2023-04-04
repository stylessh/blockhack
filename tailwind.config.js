/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--roboto-font)", "sans-serif"],
        display: ["var(--bebas-neue-font)", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#fcfff3",
          100: "#f9ffe7",
          200: "#efffc2",
          300: "#e5ff9d",
          400: "#d2ff54",
          500: "#bfff0a",
          600: "#ace609",
          700: "#8fbf08",
          800: "#739906",
          900: "#5e7d05",
        },
        secondary: {
          50: "#f7f6ff",
          100: "#eeecff",
          200: "#d6d1ff",
          300: "#bdb5ff",
          400: "#8b7dfe",
          500: "#5945fe",
          600: "#503ee5",
          700: "#4334bf",
          800: "#352998",
          900: "#2c227c",
        },
      },

      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-110%)" },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
