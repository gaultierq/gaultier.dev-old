/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.{html,erb,slim}"
  ],

  theme: {

    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
      colors: {
        background: "#FEFEFE"
      },
      fontSize: {
        xs: '0.6rem',
        sm: '0.7rem',
        base: '0.8rem',
        lg: '0.85rem',
        xl: '1rem',
        '2xl': '1.4rem',
        '3xl': '1.7rem',
      },
    },
  },
  plugins: [],
};

