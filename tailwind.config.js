/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#0077C2",
        200: "#59a5f5",
        300: "#c8ffff",
      },
      accent: { 100: "#00BFFF", 200: "#00619a" },
      text: { 100: "#333333", 200: "#5c5c5c" },
      bg: { 100: "#FFFFFF", 200: "#f5f5f5", 300: "#cccccc" },
    },
    fontFamily: {
      main: [
        "Vazirmatn",
        // "system-ui",
        // "-apple-system",
        // "BlinkMacSystemFont",
        // "Segoe UI",
        // "Roboto",
        // "Helvetica Neue",
        // "Arial",
        // "Noto Sans",
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
    },
    extend: {},
  },
  plugins: [],
};
