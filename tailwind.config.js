/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      backgroundImage: {
        heroImage: "url('./images/Home.jpg')",
      },
    },
  },
  plugins: [],
};
