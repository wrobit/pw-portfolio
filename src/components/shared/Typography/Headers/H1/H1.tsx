import * as Styled from "@components/shared/Typography/Headers/H1/H1.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const H1 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H1 {...props}>{children}</Styled.H1>;
};
