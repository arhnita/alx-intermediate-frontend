/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./*.html",              // Scan HTML files in root directory (your 1-index.html)
    "./src/**/*.{html,js}"   // Also scan src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}