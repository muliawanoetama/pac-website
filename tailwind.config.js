/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f0',
          100: '#e8e4dd',
          200: '#d4cdc1',
          300: '#b8ad9b',
          400: '#9c8d78',
          500: '#8a7a64',
          600: '#756653',
          700: '#5f5244',
          800: '#51463c',
          900: '#463d35',
          950: '#27211c',
        },
        accent: {
          50: '#fdf8ef',
          100: '#faeed9',
          200: '#f4dab2',
          300: '#edc081',
          400: '#e4a04e',
          500: '#de882c',
          600: '#cf6f22',
          700: '#ac551e',
          800: '#8a4420',
          900: '#70391d',
          950: '#3c1b0d',
        },
        church: {
          red: '#E30613',
          navy: '#00205B',
          gold: '#D4AF37',
          cream: '#FFFDD0',
          white: '#FFFFFF',
          burgundy: '#E30613',
          'light-blue': '#4A90E2',
          'cross-blue': '#2563EB',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
