import { motion } from "framer-motion";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import * as Styled from "./Hero.styles";

export const Hero = () => {
  return (
    <Styled.HeroSection variants={pageTransition} initial="initial" animate="animate">
      <Styled.HeroTypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>Work</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H4>
            Check out my latest commercial and personal projects and see how I've managed to bring
            visions to life.
          </Typography.Headers.H4>
        </motion.div>
      </Styled.HeroTypographyWrapper>
    </Styled.HeroSection>
  );
};
