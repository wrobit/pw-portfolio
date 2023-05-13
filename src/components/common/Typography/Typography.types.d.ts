type elementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
type fontFamilyType = "regular" | "medium" | "bold" | "italic" | "boldItalic";

export type TypographyProps = {
  fontSize?: string;
  color?: string;
  fontFamily?: fontFamilyType;
  element?: elementType;
  children: React.ReactNode;
};
