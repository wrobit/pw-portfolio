import { Typography } from "@components/common";
import { useTheme } from "styled-components";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";

  return (
    <Styled.Footer>
      <Styled.CopyrightText fontSize="14px" color={theme.colors.gray}>
        Copyright &copy; {`${dateYear}`}
        <Typography color={theme.colors.white}> Wrobel Piotr</Typography>. All rights reserved.
      </Styled.CopyrightText>
    </Styled.Footer>
  );
};
