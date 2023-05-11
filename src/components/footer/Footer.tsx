import * as Styled from "./Footer.styles";

export const Footer = () => {
  const dateYear = new Date().getFullYear() + "";

  return (
    <Styled.Footer>
      <Styled.CopyrightText>
        Copyright &copy; {`${dateYear}`}
        <Styled.AuthorText> Wrobel Piotr</Styled.AuthorText>. All rights reserved.
      </Styled.CopyrightText>
    </Styled.Footer>
  );
};
