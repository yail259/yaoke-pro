/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'morb': {
        'black': '#010706',
        'green': '#04201C',
        'yellow': '#FDFE44',
        'blue': '#1B656A',
      },      
    },
    extend: {},
  },
  plugins: [],
}
