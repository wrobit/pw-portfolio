import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    green: "#5F7C5F",
    gray: "#808080"
  },
  font: {
    regular: "DMSansRegular",
    medium: "DMSansMedium",
    bold: "DMSansBold",
    italic: "DMSansItalic",
    boldItalic: "DMSansBoldItalic"
  },
  breakpoints: {
    mobile: "500px",
    tablet: "768px",
    desktop: "1024px"
  },
  sizes: {
    footer: {
      height: "60px"
    },
    navbar: {
      height: "88px"
    }
  }
};

export { defaultTheme };
