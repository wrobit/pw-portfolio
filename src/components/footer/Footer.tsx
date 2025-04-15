import { Typography } from "@components/common";
import { useTheme } from "styled-components";
import * as Styled from "./Footer.styles";
import { Link } from "@components/common/Link/Link";
import { data } from "./Footer.data";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";

  return (
    <Styled.Footer>
      <Styled.FooterNavigation>
        <Typography.Headers.H5>
          From pixel-perfect designs to intuitive user experiences. Let's collaborate and create something remarkable together.
        </Typography.Headers.H5>
        <Styled.FooterNavigationLinksContainer>
          {data.map(item => (
            <Styled.FooterNavigationLinks key={item.header}>
              <Styled.FooterNavigationHeaderText>{item.header.toUpperCase()}</Styled.FooterNavigationHeaderText>
              {item.links.map(link => (
                <Link key={link.label} href={link.href}>
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                </Link>
              ))}
            </Styled.FooterNavigationLinks>
          ))}
        </Styled.FooterNavigationLinksContainer>
      </Styled.FooterNavigation>
      <Typography.Headers.H6 color={theme.colors.gray}>
        Copyright &copy; {`${dateYear}`}
        <Typography.Default color={theme.colors.white}> Wrobel Piotr @wrobit</Typography.Default>. All rights reserved.
      </Typography.Headers.H6>
    </Styled.Footer>
  );
};
