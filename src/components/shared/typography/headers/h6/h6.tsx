import * as Styled from "@components/shared/typography/headers/h6/h6.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H6 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H6 {...props}>{children}</Styled.H6>;
};
