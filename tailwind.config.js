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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     'primary': '#04201C',
      //     'secondary': '#1B656A',
      //     'accent': '#FDFE44',
      //     'neutral': "#3d4451",
      //     "base-100": "#ffffff",
      //     "info": "#3ABFF8",          
      //     "success": "#36D399",                    
      //     "warning": "#FBBD23",                    
      //     "error": "#F87272",
      //   },
      // },
      "dracula",
      "retro", 
    ],
  },
}
