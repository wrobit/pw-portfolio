import * as Styled from "@components/shared/typography/headers/h1/h1.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H1 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H1 {...props}>{children}</Styled.H1>;
};
