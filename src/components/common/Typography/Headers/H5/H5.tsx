import * as Styled from "@components/common/Typography/Headers/H5/H5.styles";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const H5 = ({ children, ...props }: TypographyProps) => {
  return <Styled.H5 {...props}>{children}</Styled.H5>;
};
