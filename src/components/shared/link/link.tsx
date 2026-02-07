import * as Styled from "./link.styles";
import { LinkProps } from "./link.types";

export const Link = ({ children, ...props }: LinkProps) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};
