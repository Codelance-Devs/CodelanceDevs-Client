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
          '33%': {top: '0', },
          '100%': {top: '-100%',},
        },
        pageLoadImage: {
          '0%': {opacity: 0, top: '2rem'},
          '80%': {opacity: 1, top: '-0.4rem'},
          '100%': {top: '1'}
        }
      },
      animation: {
        'page-load': 'pageLoad 2s ease-in-out forwards',
        'page-load-image': 'pageLoadImage .8s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
