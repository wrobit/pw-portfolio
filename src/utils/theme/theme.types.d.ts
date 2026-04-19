import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      green: string;
      gray: string;
      purple: string;
      orange: string;
    };
    font: {
      regular: string;
      medium: string;
      bold: string;
      italic: string;
      boldItalic: string;
      lightSecondary: string;
      lightItalicSecondary: string;
      regularSecondary: string;
      italicSecondary: string;
      mediumSecondary: string;
      mediumItalicSecondary: string;
      semiBoldSecondary: string;
      semiBoldItalicSecondary: string;
      boldSecondary: string;
      boldItalicSecondary: string;
    };
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      largeDesktop: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      xxxxxl: string;
      xxxxxxl: string;
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
