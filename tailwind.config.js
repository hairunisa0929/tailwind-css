/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'"],
      },
      colors: {
        primary: "#2457ca",
      },
    },
  },
  plugins: [],
};
