/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        serifbody: ["var(--font-source-serif)"],
      },

      colors: {
        primary: "#1d4ed8",
        softblue: "#eff6ff",
      },
    },
  },

  plugins: [],
}