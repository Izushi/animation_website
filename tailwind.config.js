/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112': '26rem',
        '128': '32rem',
      },
      width: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}