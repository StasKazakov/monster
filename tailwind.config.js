/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
    },
    },
  plugins: [],
}
