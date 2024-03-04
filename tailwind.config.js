/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackCPN: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#383838',
          '950': '#262626',
      },
      'orangeCPN': {
        '50': '#fffaec',
        '100': '#fff4d3',
        '200': '#ffe5a5',
        '300': '#ffd16d',
        '400': '#ffb132',
        '500': '#ff980a',
        '600': '#f67b00',
        '700': '#cc5d02',
        '800': '#a1480b',
        '900': '#823d0c',
        '950': '#461c04',
    },
    
      
      }
    },
  },
  plugins: [],
}