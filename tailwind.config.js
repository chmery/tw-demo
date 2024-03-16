/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#050505",
      "grey-light": "#E5E7EB",
      "grey-dark": "#9095A0",
      hover: "#F4F6F9",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
