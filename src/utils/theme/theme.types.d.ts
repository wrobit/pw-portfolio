import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      green: string;
      gray: string;
    };
    font: {
      regular: string;
      medium: string;
      bold: string;
      italic: string;
      boldItalic: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    sizes: {
      footer: {
        height: string;
      };
      navbar: {
        height: string;
      };
    };
  }
}
