/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      space_mono: ["Space Mono", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      cyan: {
        500: "#26c0ab",
        900: "#00494d",
      },
      grayish_cyan: {
        100: "#f4fafa",
        300: "#c5e4e7",
        500: "#7f9c9f",
        700: "#5e7a7d",
      },
      red: "#952E25",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
