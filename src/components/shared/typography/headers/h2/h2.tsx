import * as Styled from "@components/shared/typography/headers/h2/h2.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H2 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H2 {...props}>{children}</Styled.H2>;
};
