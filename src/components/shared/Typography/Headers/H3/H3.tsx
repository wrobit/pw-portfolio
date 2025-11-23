import * as Styled from "@components/shared/Typography/Headers/H3/H3.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const H3 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H3 {...props}>{children}</Styled.H3>;
};
