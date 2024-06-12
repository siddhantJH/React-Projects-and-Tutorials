/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //for theme switcher to work please add this functionality int he tailwind configuration 
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}

