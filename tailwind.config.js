/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-new': '#999999',
        white: "#FFF",
        'neutral-400': '#A3A3A3',
        'black': 'rgba(19, 19, 19, 0.918)',
        'gradient-end': 'rgba(235, 231, 211, 0)'
      },
      fontSize: {
        'nine': '0.563rem',
        'ten': '0.625rem'
      },
    },
  },
  plugins: [],
}
