import * as Styled from "@components/shared/Typography/Logo/Logo.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Logo = ({ children, ...props }: TypographyProps) => {
  return <Styled.Logo {...props}>{children}</Styled.Logo>;
};
