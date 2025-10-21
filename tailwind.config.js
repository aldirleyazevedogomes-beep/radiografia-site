/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        accent: '##fbbf24',
        bg: '#f8fafc',
      },
      fontFamily: {
        sans: [ 'Inter' , 'ui-sans-serif', 'system-ui'],
        display: [ 'Poppins' , 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
