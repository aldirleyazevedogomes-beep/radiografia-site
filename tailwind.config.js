/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#1e293b',
      accent: '##fbbf24',
      bg: '#f8fafc',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      display: ['Poppins', 'ui-sans-serif'],
    },
  },
};
export const plugins = [];
