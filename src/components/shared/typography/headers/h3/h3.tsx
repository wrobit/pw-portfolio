import * as Styled from "@components/shared/typography/headers/h3/h3.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H3 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H3 {...props}>{children}</Styled.H3>;
};
