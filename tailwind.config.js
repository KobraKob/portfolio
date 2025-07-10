/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#FFD700",
        darkGrey: "#121212",
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "Anton", "Oswald", "sans-serif"],
        body: ["Inter", "Poppins", "Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
}