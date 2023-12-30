/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#016450',
        'soft-pink': '#fdcfd5',
        'faded-black': '#333333',
      },
    },
  },
  plugins: [],
}

