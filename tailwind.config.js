/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/servicio.html", "./src//*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}