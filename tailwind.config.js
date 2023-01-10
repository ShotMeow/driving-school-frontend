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
        warning: "#FF0000"
      },
      borderRadius: {
        sm: "4px",
        md: "10px",
        lg: "15px"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "15px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "25px",
        "4xl": "30px",
        "5xl": "40px",
        "6xl": "48px"
      },
      boxShadow: {
        md: "0px 0px 60px 2px rgba(0, 0, 0, 0.04)"
      }
    },
    container: {
      center: true,
      screens: {
        xl: "1200px"
      },
      padding: {
        DEFAULT: "1rem",
        xl: 0
      }
    }
  },
  plugins: []
};
