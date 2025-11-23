import * as Styled from "@components/shared/Typography/Headers/H2/H2.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const H2 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H2 {...props}>{children}</Styled.H2>;
};
