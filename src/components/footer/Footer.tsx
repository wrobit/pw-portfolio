import { Typography } from "@components/common";
import { useTheme } from "styled-components";
import * as Styled from "./Footer.styles";
import { Link } from "@components/common/Link/Link";
import { data } from "./Footer.data";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp } from "@utils/animations/variants";
import { useEffect } from "react";

export const Footer = () => {
  const theme = useTheme();
  const dateYear = new Date().getFullYear() + "";
  const { ref, isInView, controls } = useScrollAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Styled.Footer ref={ref}>
      <Styled.FooterNavigation>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={0.2}>
          <Typography.Headers.H5>
            From pixel-perfect designs to intuitive user experiences. Let's collaborate and create something remarkable together.
          </Typography.Headers.H5>
        </motion.div>
        <Styled.FooterNavigationLinksContainer>
          {data.map((item, index) => (
            <motion.div key={item.header} variants={fadeInUp} initial="hidden" animate={controls} custom={0.3 + index * 0.1}>
              <Styled.FooterNavigationLinks>
                <Styled.FooterNavigationHeaderText>{item.header.toUpperCase()}</Styled.FooterNavigationHeaderText>
                {item.links.map(link => (
                  <Link key={link.label} href={link.href}>
                    {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                  </Link>
                ))}
              </Styled.FooterNavigationLinks>
            </motion.div>
          ))}
        </Styled.FooterNavigationLinksContainer>
      </Styled.FooterNavigation>
      <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={0.6}>
        <Typography.Headers.H6 color={theme.colors.gray}>
          Copyright &copy; {`${dateYear}`}
          <Typography.Default color={theme.colors.white}> Wrobel Piotr @wrobit</Typography.Default>. All rights reserved.
        </Typography.Headers.H6>
      </motion.div>
    </Styled.Footer>
  );
};
