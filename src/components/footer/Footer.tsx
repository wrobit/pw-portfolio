import { Typography } from "@components/common";
import { useTheme } from "styled-components";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";

  return (
    <Styled.Footer>
      <Styled.FooterNavigation>
        <Styled.FooterNavigationHeader>
          <Typography.Headers.H5>
            From pixel-perfect designs to intuitive user experiences. Let's collaborate and create something remarkable together.
          </Typography.Headers.H5>
        </Styled.FooterNavigationHeader>
      </Styled.FooterNavigation>
      <Typography.Headers.H6 color={theme.colors.gray}>
        Copyright &copy; {`${dateYear}`}
        <Typography.Default color={theme.colors.white}> Wrobel Piotr @wrobit</Typography.Default>. All rights reserved.
      </Typography.Headers.H6>
    </Styled.Footer>
  );
};
