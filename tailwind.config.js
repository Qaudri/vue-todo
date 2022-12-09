/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#0b0d0F',
        'secondary' : '#1C2023',
        'primary' : '#19976A'
       }
    },
  },
  plugins: [],
}
