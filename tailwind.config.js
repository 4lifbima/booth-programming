/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f",
          800: "#112240",
          700: "#1f3a5f",
          600: "#2a4a7c",
        },
      },
    },
  },
  plugins: [],
};
