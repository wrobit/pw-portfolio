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
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
