import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

import { fadeInUp, pageTransition } from "@utils/animations/variants";

export const HeroImage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroImageSrc = `${import.meta.env.BASE_URL}images/hero/hero-image.png`;

  return (
    <ImageWrapper
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.5}>
        <Image src={heroImageSrc} alt="Hero Image" />
      </motion.div>
    </ImageWrapper>
  );
};

const ImageWrapper = styled(motion.div)`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 275px;
  }
`;
