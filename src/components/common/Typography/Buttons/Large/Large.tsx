import * as Styled from "@components/common/Typography/Buttons/Large/Large.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Large = ({ children, ...props }: TypographyProps) => {
  return <Styled.Large {...props}>{children}</Styled.Large>;
};
