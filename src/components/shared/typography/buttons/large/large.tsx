import * as Styled from "@components/shared/typography/buttons/large/large.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Large = ({ children, ...props }: TypographyProps) => {
  return <Styled.Large {...props}>{children}</Styled.Large>;
};
