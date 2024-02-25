import * as Styled from "@components/common/Typography/Logo/Logo.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Logo = ({ children, ...props }: TypographyProps) => {
  return <Styled.Logo {...props}>{children}</Styled.Logo>;
};
