/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue' : 'rgb(var(--color-royal-blue))',
        'java' : 'rgb(var(--color-java))',
        'dark-gray': 'rgb(var(--color-dark-gray))',
        'medium-gray': 'rgb(var(--color-medium-gray))',
        'light-gray': 'rgb(var(--color-light-gray))',
        'science-blue': 'rgb(var(--color-science-blue))',
        'regent-gray': 'rgb(var(--color-regent-gray))',
        'lima-green': 'rgb(var(--color-lima-green))'
      },
      fontSize: {
        '3xl': ['54px', {lineHeight: '66px'} ],
        '2xl': ['44px', {lineHeight: '53px'} ],
      },
      fontWeight: {
        bold: 600
      },
      boxShadow: {
        xs: '0 0 0 3px'
      }
    },
    borderRadius: {
      '10' : '10px',
      '20' : '20px',
      '30' : '30px',
      '40' : '40px',
      'full' : '9999px'
    },
  },
  plugins: [],
}

