import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

const Typography = styled.span<Omit<TypographyProps, "children" | "element">>`
  font-family: ${({ theme, fontFamily }) => (fontFamily ? theme.font[fontFamily] : theme.font.regular)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
`;

export { Typography };
