import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography = ({ children, element = "span", ...props }: TypographyProps) => {
  return (
    <Styled.Typography as={element} {...props}>
      {children}
    </Styled.Typography>
  );
};
