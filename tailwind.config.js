/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        vazir : "vazir"
      },
      keyframes: {
        showList: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'pulse-shadow': {
          '0%': { boxShadow: '0 0 0 0px rgba(253, 186, 116, 0.9)' },
          '100%': { boxShadow: '0 0 0 7px rgba(253, 186, 116, 0)' },
        },
      },
      animation: {
        showList: 'showList 0.2s ease-out forwards',
        'pulse-shadow': 'pulse-shadow 2s infinite',
      },
    },
  },
  plugins: [],
}

