/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8FC7FF',
          400: '#66B3FF',
          500: '#3D9FFF',
          600: '#147AFF',
          700: '#0062DB',
          800: '#004CAF',
          900: '#003783',
        },
        brown: {
          50: '#FAF8F6',
          100: '#F5F0ED',
          200: '#E6DDD6',
          300: '#D7C9BE',
          400: '#C8B5A7',
          500: '#B9A18F',
          600: '#AA8D78',
          700: '#8E7361',
          800: '#725A4A',
          900: '#564333',
        },
        beige: {
          50: '#FDFCFB',
          100: '#FBF8F6',
          200: '#F6F0EA',
          300: '#F1E7DE',
          400: '#ECDED2',
          500: '#E7D5C6',
          600: '#D4B9A2',
          700: '#C19D7E',
          800: '#AE815A',
          900: '#8B6544',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
} 