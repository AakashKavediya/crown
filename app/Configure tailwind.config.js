/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // if using /app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // if using /pages directory
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'], // Optional: custom font setup
        k2d: ['K2D', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
