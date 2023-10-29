/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 5px 5px rgba(0, 0, 0, 1)",
      },
      backgroundColor: {
        black: "rgba(0, 0, 0, 0.5);",
      },
      
    },
  },
  plugins: [],
};
