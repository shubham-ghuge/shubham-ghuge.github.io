const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      colors: {
        Teal:colors.teal,
        cyan:colors.cyan,
        sky:colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    },
  },
  plugins: [],
}
