module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "440px",
      tablet: "601px",
      md: "641px",
      lg: "1101px",
    },
    colors: {
      white: "var(--welcomeWhite)",
      black: "var(--welcomeBlack)",
      grayBlack: "var(--grayBlack)",
      primary: "var(--primaryBlue)",
      primaryLight: "var(--primaryBlueLight)",
      gray: "var(--lightGray)",
    },
    fontFamily: {
      sans: ["Nutino-Sans"],
      gilroy: ["Gilroy"],
    },
    fontSize: {
      base: "16px",
      lg: "22px",
      xl: "30px",
      "2xl": "34px",
      header: "38px",
    },
  },
  variants: {
    extend: {
      spacing: {
        md: "30px",
        lg: "90px",
      },
    },
  },
  plugins: [],
}
