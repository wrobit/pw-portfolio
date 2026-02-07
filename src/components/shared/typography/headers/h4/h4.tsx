import * as Styled from "@components/shared/typography/headers/h4/h4.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H4 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H4 {...props}>{children}</Styled.H4>;
};
