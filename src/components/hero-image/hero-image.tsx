import { motion } from "framer-motion";
import { useRef } from "react";

import heroImage from "@assets/images/hero/hero-image.avif";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import * as Styled from "./hero-image.styles";

export const HeroImage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.ImageWrapper
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.5}>
        <Styled.Image src={heroImage} alt="Hero Image" />
      </motion.div>
    </Styled.ImageWrapper>
  );
};
