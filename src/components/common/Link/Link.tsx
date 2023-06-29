import * as Styled from "./Link.styles";

export const Link = ({ children, ...props }: LinkProps) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};
