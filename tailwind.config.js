/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#114A7A',
        danger: '#F04438',
        background: '#F5F7FA',
      },
    },
  },
  plugins: [],
}
