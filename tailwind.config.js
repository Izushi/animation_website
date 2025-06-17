/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      height: {
        128: '32rem',
      },
      width: {
        120: '30rem',
      },
      transitionProperty: {
        transform: 'transform',
      },
      transform: {
        'rotate-y-360': 'rotateY(360deg)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
