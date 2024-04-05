/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/servicio.html","./pages/contacto.html", "./src//*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
],
}