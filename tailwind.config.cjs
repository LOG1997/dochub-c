/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  variants: {
    extend: {
      textOpacity: ["dark"],
      backgroundColor: ["dark"],
    },
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [],
};
