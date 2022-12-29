/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(0, 94%, 66%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  // plugins: [require('@tailwindcss/forms')],
};
