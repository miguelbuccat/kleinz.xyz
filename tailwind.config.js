const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      fontFamily: {
        flower: ['"Indie Flower"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

