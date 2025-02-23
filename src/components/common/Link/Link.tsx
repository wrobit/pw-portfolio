import * as Styled from "./Link.styles";
import { LinkProps } from "./Link.types";

export const Link = ({ children, ...props }: LinkProps) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};
