import * as Styled from "@components/common/Typography/Default/Default.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Default = ({ children, ...props }: TypographyProps) => {
  return <Styled.Default {...props}>{children}</Styled.Default>;
};
