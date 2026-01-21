/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono",
    },

    extend: {
      colors: {
        primary: "#00A3E0",
        primaryHover: "#0d1476ff",
        secondary: "#f97316",
      },
    },
  },
  plugins: [],
};