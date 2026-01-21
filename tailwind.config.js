/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono",
    },

    extend: {
      colors: {
        primary: "#00A3E0",     // blue
        primaryHover: "#0083B3", // darker blue for hover
        secondary: "#f97316",   // orange
      },
    },
  },
  plugins: [],
};