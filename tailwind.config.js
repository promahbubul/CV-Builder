/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#171717",
        "very-dark-gray": "#1E1E1E",
        teal: "#2A9294",
        "cadet-blue": "#918EA4",
        "custom-blue": {
          DEFAULT: "#2A9294",
          14: "rgba(42,146,148,0.14)",
        },
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
