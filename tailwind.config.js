/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        md: '0px 0px 5px rgba(0,0,0,.1);',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        tilt: ['Tilt Neon', 'cursive'],
      },
      colors: {
        primary: '#55acee',
      },
    },
  },
  plugins: [],
};
