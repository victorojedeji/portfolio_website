/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'base': '#150E28',
        'dark': '#150E28',
        'mid': '#903AFF',
        'light': '#D434FE',
        'gray-100': '#000106',
        'gray-75': '#000106bf',
        'gray-50': '#00010680',
        'gray-25': '#00010640',
        'gray-10': '#0001061a',
        'gray-05': '#0001060d',
        'error-500': 'f44336',
        'error-400': 'ef55350',
        'error-300': 'e57373',
        'error-200': 'ef9a9a',
        'error-100': 'ffcdd2',
        'error-50': 'ffebee',
      },
    },
  },
  plugins: [],
}