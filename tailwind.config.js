/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",          // Include HTML
      "./**/*.{js,jsx,ts,tsx}",  // Scan all JS/React files in the project
      "!./node_modules/**/*"   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

