import { motion } from "framer-motion";
import { useTheme } from "styled-components";

import { Typography } from "@components/shared";
import { Link } from "@components/shared/Link/Link";
import { useScrollAnimation } from "@utils/animations/hooks";

import { footerItemVariants, footerVariants } from "./Footer.animations";
import { data } from "./Footer.data";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";
  const { ref, controls } = useScrollAnimation();

  return (
    <Styled.Footer ref={ref} variants={footerVariants} initial="hidden" animate={controls}>
      <Styled.FooterNavigation>
        <motion.div variants={footerItemVariants}>
          <Typography.Headers.H5 as="p">
            From pixel-perfect designs to intuitive user experiences. Let's collaborate and create
            something remarkable together.
          </Typography.Headers.H5>
        </motion.div>
        <Styled.FooterNavigationLinksContainer>
          {data.map((item) => (
            <Styled.FooterNavigationLinks key={item.header} variants={footerItemVariants}>
              <Styled.FooterNavigationHeaderText>
                {item.header.toUpperCase()}
              </Styled.FooterNavigationHeaderText>
              {item.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                </Link>
              ))}
            </Styled.FooterNavigationLinks>
          ))}
        </Styled.FooterNavigationLinksContainer>
      </Styled.FooterNavigation>
      <motion.div variants={footerItemVariants}>
        <Typography.Headers.H6 as="p" color={theme.colors.gray}>
          Copyright &copy; {`${dateYear}`}
          <Typography.Default color={theme.colors.white}> Wrobel Piotr @wrobit</Typography.Default>.
          All rights reserved.
        </Typography.Headers.H6>
      </motion.div>
    </Styled.Footer>
  );
};
