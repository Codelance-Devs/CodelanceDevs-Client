/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pageLoad: {
          '0%': {top: '0',},
          '100%': {top: '-100%',},
        },
        pageLoadImage: {
          ''
        }
      },
      animation: {
        'page-load': 'pageLoad 3s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
