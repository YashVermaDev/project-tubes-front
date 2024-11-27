/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 
    'node_modules/preline/dist/*.js'],
    theme: {
    extend: {
      colors: {
        'custom-primary': '#153457',
        'custom-primary-light': '#00FFFF',
        'custom-secondary': '#DCE0E6',
        'custom-secondary-dark': '#BFBFBF',
        'custom-secondary-light': 'rgba(21,52,87,.1)',
        'custom-warning': '#FA1900',
        'custom-lightblue': '#049dec',
        'custom-gray': '#efefef'
      },
      fontFamily: {
        'custom-sans':
          'Work Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
      borderRadius: {
        'custom-rounded1': '5px'
      },
      fontSize: {
        xxs: ['10px', '14px']
      },
      dropShadow: {
        'custom-dropshadow': '0px 0px 25px rgba(0,0,0,.16)'
      }
    }
  },
  plugins: [ require('preline/plugin') ]
}
