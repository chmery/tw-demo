/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#050505",
      white: "#f7f7f7",
      red: "#fa5050",
      "red-hover": "#ff7070",
      "grey-light": "#E5E7EB",
      "grey-dark": "#9095A0",
      "grey-hover": "#F4F6F9",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
