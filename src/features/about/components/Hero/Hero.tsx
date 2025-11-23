import { motion } from "framer-motion";
import { useRef } from "react";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import * as Styled from "./Hero.styles";

export const Hero = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.HeroSection
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <Styled.HeroTypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>About me</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H4>
            I am passionate about using my skills and experience to help individuals and businesses
            achieve their goals. I have honed my craft and developed a strong understanding of what
            it takes to deliver successful projects.
          </Typography.Headers.H4>
        </motion.div>
      </Styled.HeroTypographyWrapper>
    </Styled.HeroSection>
  );
};
