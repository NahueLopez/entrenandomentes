/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#232949",
        secondary: '#727C73',
        customBlue1 : '#B3CFF2',
        customBlue2 : '#B3CFF2',
        customBlue3: '#2173A6', 
        customBlue4: '#18455B', 
        customBlue5: '#5BA9D9', 
      },
      fontSize: {
        'extra-large': '3.3rem', // Tamaño de letra
        'extra-large-2': '3rem', // Tamaño de letra
        'medium' : '2.5rem',
      },
    },
  },
  plugins: [],
}
