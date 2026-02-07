import * as Styled from "@components/shared/typography/default/default.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Default = ({ children, ...props }: TypographyProps) => {
  return <Styled.Default {...props}>{children}</Styled.Default>;
};
