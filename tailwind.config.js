/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringWidth: {
        6: "6px",
      },
      gridTemplateCols: {
        10: "repeat(10, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
