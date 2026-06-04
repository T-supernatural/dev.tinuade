/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F3D91',
          ink: '#05070B',
          cloud: '#F5F8FC',
          line: '#DDE6F3',
        },
      },
      boxShadow: {
        premium: '0 24px 70px rgba(15, 61, 145, 0.14)',
        crisp: '0 14px 35px rgba(5, 7, 11, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
