/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#055EAF',
        'blue-secondary': '#F1F8FF',
        'gray-primary': "#EEEEEE",
      },
    },
  },
  plugins: [],
}