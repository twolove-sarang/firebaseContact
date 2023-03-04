/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
      },
      colors: {
        grey: '#f7f7f7',
        yellow: '#eeb004',
        red: '#f44250',
        blue: '#3992ff',
        device: '#D7200F',
      },
      height: {
        dheight: '26rem',
        eheight: '27rem',
        fheight: '28rem',
      },
      top: {
        ctop: '19rem',
      },
    },
  },
  plugins: [],
};
