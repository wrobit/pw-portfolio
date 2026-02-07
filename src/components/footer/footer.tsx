import { motion } from "framer-motion";
import { useTheme } from "styled-components";

import { Typography } from "@components/shared";
import { Link } from "@components/shared/link/link";
import { data } from "@data/footer.data";
import { useScrollAnimation } from "@utils/animations/hooks";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";

import { footerItemVariants, footerVariants } from "./footer.animations";
import * as Styled from "./footer.styles";

export const Footer = () => {
  const { messages } = useI18n();
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";
  const { ref, controls } = useScrollAnimation();

  const translatedHeader = {
    explore: messages.footer.explore,
    socials: messages.footer.socials,
    contact: messages.footer.contact,
  };

  const translatedRouteLabel = {
    [routes.home]: messages.footer.home,
    [routes.work]: messages.footer.work,
    [routes.pricing]: messages.footer.pricing,
    [routes.about]: messages.footer.about,
  };

  return (
    <Styled.Footer ref={ref} variants={footerVariants} initial="hidden" animate={controls}>
      <Styled.FooterNavigation>
        <motion.div variants={footerItemVariants}>
          <Typography.Headers.H5 as="p">{messages.footer.tagline}</Typography.Headers.H5>
        </motion.div>
        <Styled.FooterNavigationLinksContainer>
          {data.map((item) => (
            <Styled.FooterNavigationLinks key={item.header} variants={footerItemVariants}>
              <Styled.FooterNavigationHeaderText>
                {(
                  translatedHeader[item.header as keyof typeof translatedHeader] ?? item.header
                ).toUpperCase()}
              </Styled.FooterNavigationHeaderText>
              {item.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {(
                    translatedRouteLabel[link.href as keyof typeof translatedRouteLabel] ??
                    link.label
                  )
                    .charAt(0)
                    .toUpperCase() +
                    (
                      translatedRouteLabel[link.href as keyof typeof translatedRouteLabel] ??
                      link.label
                    ).slice(1)}
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
