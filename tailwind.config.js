module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      tablet: "601px",
      md: "641px",
      lg: "1100px",
    },
    colors: {
      white: "var(--welcomeWhite)",
      black: "var(--welcomeBlack)",
      grayBlack: "var(--grayBlack)",
      primary: "var(--primaryBlue)",
      gray: "var(--lightGray)",
    },
    fontFamily: {
      sans: ["Nutino-Sans"],
      gilroy: ["Gilroy"],
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
