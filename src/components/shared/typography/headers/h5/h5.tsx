import * as Styled from "@components/shared/typography/headers/h5/h5.styles";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const H5 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H5 {...props}>{children}</Styled.H5>;
};
