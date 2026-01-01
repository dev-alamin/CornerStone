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
            },
        },
    },
    plugins: [],
}

