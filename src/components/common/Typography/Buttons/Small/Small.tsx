import * as Styled from "@components/common/Typography/Buttons/Small/Small.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Small = ({ children, ...props }: TypographyProps) => {
  return <Styled.Small {...props}>{children}</Styled.Small>;
};
