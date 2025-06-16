import * as Styled from "@components/shared/Typography/Buttons/Large/Large.styles";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Large = ({ children, ...props }: TypographyProps) => {
  return <Styled.Large {...props}>{children}</Styled.Large>;
};
