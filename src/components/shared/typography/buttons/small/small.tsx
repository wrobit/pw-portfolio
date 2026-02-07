import * as Styled from "@components/shared/typography/buttons/small/small.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Small = ({ children, ...props }: TypographyProps) => {
  return <Styled.Small {...props}>{children}</Styled.Small>;
};
