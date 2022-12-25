/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gameover: ["gameover", "sans-serif"],
        opensans: ["opensans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
