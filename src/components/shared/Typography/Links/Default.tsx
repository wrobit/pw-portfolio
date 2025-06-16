import * as Styled from "@components/shared/Typography/Default/Default.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Default = ({ children, ...props }: TypographyProps) => {
  return <Styled.Default {...props}>{children}</Styled.Default>;
};
