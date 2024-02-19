/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    colors: {
      gray: {
        0: 'var(--gray-0)',
        50: 'var(--gray-50)',
        200: 'var(--gray-200)',
        400: 'var(--gray-400)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      blue: {
        0: 'var(--blue-0)',
        50: 'var(--blue-50)',
        200: 'var(--blue-200)',
        400: 'var(--blue-400)',
        800: 'var(--blue-800)',
      },
      red: {
        0: 'var(--red-0)',
        200: 'var(--red-200)',
        800: 'var(--red-800)',
      },
      green: {
        0: 'var(--green-0)',
        200: 'var(--green-200)',
        800: 'var(--green-800)',
      },
      white: {
        0: '#FFFFFF',
        100: '#F7F7F7', // Lightest shade of white
        200: '#F0F0F0',
        300: '#EAEAEA',
        400: '#E0E0E0',
        500: '#D6D6D6',
        600: '#CCCCCC',
        700: '#B3B3B3',
        800: '#999999',
        900: '#666666',
        1000: '#333333', // Darkest shade of white
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        quicksand: 'var(--font-quicksand)',
        inter: 'var(--font-inter)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
