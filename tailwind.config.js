/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'], // Add Teko font here
      },
    },
  },
  plugins: [],
};
