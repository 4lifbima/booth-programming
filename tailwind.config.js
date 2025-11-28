/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f",
          800: "#112240",
          700: "#1f3a5f",
          600: "#2a4a7c",
        },
        ksl: {
          primary: '#0ea5e9', // Sky 500
          secondary: '#6366f1', // Indigo 500
          dark: '#0f172a', // Slate 900
          light: '#f8fafc', // Slate 50
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
