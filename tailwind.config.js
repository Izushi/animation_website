/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
