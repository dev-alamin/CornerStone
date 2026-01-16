/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['var(--font-bricolage)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'uncutsans': ['var(--font-uncutsans)', 'sans-serif'],
      },
      colors: {
        'primary': '#D8C6FF',
        'primary-base': '#5A147F',
        'neutral-base': '#4F4D53',
      },
      screens: {
        'nav': '1200px', // Custom breakpoint for navigation menu
        'mobile': '600px', // Custom breakpoint for mobile devices
      },
    },
  },
  plugins: [],
}

