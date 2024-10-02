/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-green': '#4ca361',
        'accent-purple': '#aa6cbb',
        'accent-pink': '#db88a2',
        'light-yellow': '#f0e1a7',
        'light-orange': '#f2ba81',
        'light-purple': '#bda9cc',
        'light-blue': '#93bcd9',
      },
    },
  },
  plugins: [],
};