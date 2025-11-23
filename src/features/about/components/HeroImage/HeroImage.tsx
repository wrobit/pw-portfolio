import { motion } from "framer-motion";
import { useRef } from "react";

import { fadeInUp, pageTransition } from "@utils/animations/variants";

import * as Styled from "./HeroImage.styles";

export const HeroImage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.HeroImageWrapper
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.5}>
        <Styled.HeroImage src={"/images/hero/hero-image.png"} alt="Hero Image" />
      </motion.div>
    </Styled.HeroImageWrapper>
  );
};
