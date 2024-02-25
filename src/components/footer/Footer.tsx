import { Typography } from "@components/common";
import { useTheme } from "styled-components";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";

  return (
    <Styled.Footer>
      <Typography.Headers.H6 color={theme.colors.gray}>
        Copyright &copy; {`${dateYear}`}
        <Typography.Default color={theme.colors.white}> Wrobel Piotr</Typography.Default>. All rights reserved.
      </Typography.Headers.H6>
    </Styled.Footer>
  );
};
