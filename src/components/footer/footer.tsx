import { motion } from "framer-motion";
import { useTheme } from "styled-components";

import { Typography } from "@components/shared";
import { data } from "@data/footer.data";
import { useScrollAnimation } from "@utils/animations/hooks";
import { routes } from "@utils/constants/routes.constants";

import { footerItemVariants, footerVariants } from "./footer.animations";
import * as Styled from "./footer.styles";

type FooterProps = {
  onManageCookies: () => void;
};

export const Footer = ({ onManageCookies }: FooterProps) => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";
  const { ref, controls } = useScrollAnimation();

  return (
    <Styled.Footer ref={ref} variants={footerVariants} initial="hidden" animate={controls}>
      <Styled.FooterNavigation>
        <motion.div variants={footerItemVariants}>
          <Styled.FooterLogo>wrobit</Styled.FooterLogo>
        </motion.div>
        <Styled.FooterNavigationLinksContainer>
          {data.map((item) => (
            <Styled.FooterNavigationLinks key={item.header} variants={footerItemVariants}>
              <Styled.FooterNavigationHeaderText>
                {item.header.toUpperCase()}
              </Styled.FooterNavigationHeaderText>
              {item.links.map((link) => (
                <Styled.FooterNavigationLink key={link.label} href={link.href}>
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                </Styled.FooterNavigationLink>
              ))}
            </Styled.FooterNavigationLinks>
          ))}
        </Styled.FooterNavigationLinksContainer>
      </Styled.FooterNavigation>
      <Styled.FooterBottom variants={footerItemVariants}>
        <Typography.Headers.H6 as="p" color={theme.colors.white}>
          Copyright &copy; {`${dateYear}`}
          <Typography.Default color={theme.colors.orange}> Wrobel Piotr</Typography.Default>. All
          rights reserved.
        </Typography.Headers.H6>
        <Styled.FooterLegal aria-label="Legal">
          <Styled.FooterLegalLink href={routes.privacyPolicy}>
            Privacy policy
          </Styled.FooterLegalLink>
          <Styled.FooterLegalButton type="button" onClick={onManageCookies}>
            Cookie settings
          </Styled.FooterLegalButton>
        </Styled.FooterLegal>
      </Styled.FooterBottom>
    </Styled.Footer>
  );
};
