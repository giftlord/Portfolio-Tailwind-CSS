/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors :{
        primary:'#2563eb',
        dark : '#111827',
      },
      screens:{
        'xl': '1280px'
      },
    },
  },
  plugins: [],
}

