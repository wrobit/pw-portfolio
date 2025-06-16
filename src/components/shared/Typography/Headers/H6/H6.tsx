import * as Styled from "@components/shared/Typography/Headers/H6/H6.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const H6 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H6 {...props}>{children}</Styled.H6>;
};
