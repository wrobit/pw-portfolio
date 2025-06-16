import * as Styled from "@components/shared/Typography/Buttons/Small/Small.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Small = ({ children, ...props }: TypographyProps) => {
  return <Styled.Small {...props}>{children}</Styled.Small>;
};
