/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "meadow-green": "#7CB342",
        "soft-mint": "#A5D6A7",
        "cream": "#FFFDE7",
        "light-yellow": "#FFF9C4",
        "sunflower": "#FFD54F",
        "sky-blue": "#81D4FA",
        "lavender": "#CE93D8",
        "rose-pink": "#F48FB1"
      },
      fontFamily: {
        "handwriting": ['"Pacifico"', '"Caveat"', '"cursive"'],
        "body": ['"Nunito"', '"sans-serif"']
      }
    },
  },
  plugins: [],
};
