import * as Styled from "@components/common/Typography/Headers/H4/H4.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const H4 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H4 {...props}>{children}</Styled.H4>;
};
