import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    black: "#080808",
    white: "#FFFFFF",
    green: "#5F7C5F",
    gray: "#808080",
    purple: "#3D348B",
    orange: "#F35B04",
  },
  font: {
    regular: "DMSansRegular",
    medium: "DMSansMedium",
    bold: "DMSansBold",
    italic: "DMSansItalic",
    boldItalic: "DMSansBoldItalic",
    lightSecondary: "CormorantInfantLight",
    lightItalicSecondary: "CormorantInfantLightItalic",
    regularSecondary: "CormorantInfantRegular",
    italicSecondary: "CormorantInfantItalic",
    mediumSecondary: "CormorantInfantMedium",
    mediumItalicSecondary: "CormorantInfantMediumItalic",
    semiBoldSecondary: "CormorantInfantSemiBold",
    semiBoldItalicSecondary: "CormorantInfantSemiBoldItalic",
    boldSecondary: "CormorantInfantBold",
    boldItalicSecondary: "CormorantInfantBoldItalic",
  },
  fontSize: {
    h1: "56px",
    h2: "48px",
    h3: "32px",
    h4: "24px",
    h5: "20px",
    h6: "16px",
    body: "14px",
    small: "12px",
  },
  breakpoints: {
    mobile: "500px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1440px",
  },
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
    xxxxl: "80px",
    xxxxxl: "192px",
    xxxxxxl: "256px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    xxl: "32px",
  },
  sizes: {
    footer: {
      height: "60px",
    },
    navbar: {
      height: "96px",
    },
  },
};

export { defaultTheme };
