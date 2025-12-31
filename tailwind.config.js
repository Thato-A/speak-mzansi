/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandOrange: "#F55A16",
        brandOrangeDark: "#E84B10",
      },
    },
  },
  plugins: [],
};
