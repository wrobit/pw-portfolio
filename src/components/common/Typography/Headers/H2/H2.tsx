import * as Styled from "@components/common/Typography/Headers/H2/H2.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const H2 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H2 {...props}>{children}</Styled.H2>;
};
