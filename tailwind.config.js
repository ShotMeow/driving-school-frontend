/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0075FF",
        "primary-hover": "#2F8FFF",
        "primary-active": "#0075FF",
        secondary: "#282828",
        "secondary-hover": "#212121",
        "secondary-active": "#121212",
        gray: "#777777",
        black: "#282828",
        info: "#E6F3FF",
        success: "#E6FFED",
        warning: "#FF0000",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
