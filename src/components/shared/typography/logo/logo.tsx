import * as Styled from "@components/shared/typography/logo/logo.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Logo = ({ children, ...props }: TypographyProps) => {
  return <Styled.Logo {...props}>{children}</Styled.Logo>;
};
