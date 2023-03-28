/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IRSans: ['IranSans'],
      },
      rotate: {
        360: '360deg',
      },
      minHeight: {
        cardText: '4.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
