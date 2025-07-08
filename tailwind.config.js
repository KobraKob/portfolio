/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          gray: {
            900: '#0f172a',
            800: '#1e293b',
            700: '#334155',
            600: '#475569',
          },
        },
      },
    },
    plugins: [],
  }