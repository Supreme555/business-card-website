module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6F0FF',
          DEFAULT: '#4A90E2',
          dark: '#2171CC',
        },
        secondary: {
          light: '#F5E6D3',
          DEFAULT: '#A67C52',
          dark: '#805C32',
        },
        beige: {
          light: '#FFF8F0',
          DEFAULT: '#F5E6D3',
          dark: '#E6D0B3',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 