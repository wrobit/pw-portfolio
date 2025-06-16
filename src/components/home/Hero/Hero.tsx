import { motion } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "styled-components";

import ScrollDownIcon from "@assets/icons/expand-down-double.svg";
import * as Styled from "@components/home/Hero/Hero.styles";
import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

export const Hero = () => {
  const theme = useTheme();
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const scrollToExplore = () => {
    if (heroSectionRef.current) {
      window.scrollTo({
        top: heroSectionRef.current.offsetHeight + Number(theme.sizes.navbar.height.slice(0, 2)),
        behavior: "smooth",
      });
    }
  };

  return (
    <Styled.HeroSection
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <Styled.HeroTypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>Software Engineer & UX / UI Designer</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H4>
            Software developer based in Poland. Mostly interested in web development and UI/UX
            design. Person that always seek to create everything from his own ideas. Looking for new
            opportunities and ideas.
          </Typography.Headers.H4>
        </motion.div>
      </Styled.HeroTypographyWrapper>
      <Styled.HeroButtonWrapper>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          whileHover={{ y: -5 }}
        >
          <Styled.HeroButton onClick={scrollToExplore}>
            <Typography.Buttons.Small color="inherit">scroll to explore</Typography.Buttons.Small>
            <Styled.HeroButtonIcon src={ScrollDownIcon} />
          </Styled.HeroButton>
        </motion.div>
      </Styled.HeroButtonWrapper>
    </Styled.HeroSection>
  );
};
