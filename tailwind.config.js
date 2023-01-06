const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "18rem",
        "2xl": "6rem",
      },
    },
    textColor: (theme) => theme("colors"),
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        grey: {
          DEFAULT: "#9a9faf",
          light: "#E5E5E5",
          dark: "#A3A3A3",
        },
        red: {
          light: "#F96261",
          DEFAULT: "#F83B3A",
          dark: "#DF3534",
        },
        yellow: {
          light: "#EFE583",
          DEFAULTL: "#ebdf64",
          dark: "#D4C95A",
        },
        green: {
          light: "#81E58A",
          DEFAULT: "#62de6d",
          dark: "#58C862",
        },
        pink: {
          light: "#E277E4",
          DEFAULT: "#DB55DD",
          dark: "#C54DC7",
        },
        blue: {
          light: "#7575F4",
          DEFAULT: "#5353F1",
          dark: "#323291",
        },
        indigo: {
          light: "#8EF2F8",
          DEFAULT: "#42E9F4",
          dark: "#35BAC3",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
