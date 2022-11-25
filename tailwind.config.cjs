/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'dark-bg': '#171717',
        'primary': '#BCA8FF'
      }
    }
  },
  plugins: []
};