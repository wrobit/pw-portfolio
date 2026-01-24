import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import leavesImage from "@assets/leaves.avif";
import { Typography } from "@components/shared";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, hoverScale, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";

import * as Styled from "./AboutMe.styles";

export const AboutMe = () => {
  const navigate = useNavigate();
  const { ref, isInView, controls } = useScrollAnimation();

  const handleRouteChange = () => {
    navigate(routes.about);
  };

  return (
    <Styled.AboutMeSection
      ref={ref}
      variants={pageTransition}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Styled.AboutMeHeader>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={1}>
          <Typography.Headers.H5 as="p">
            I'm a developer that is dedicated to every project I undertake. I closely work with
            every team and client to understand needs and deliver the best solutions. Creating a
            product that exceeds my client's expectations is what I seek to.
          </Typography.Headers.H5>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={1.2}>
          <Styled.AboutMeButton
            onClick={handleRouteChange}
            variants={hoverScale}
            initial="initial"
            whileHover="hover"
          >
            About me
          </Styled.AboutMeButton>
        </motion.div>
      </Styled.AboutMeHeader>
      <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={1.4}>
        <Styled.AboutMeImage
          src={leavesImage}
          alt="Decorative leaves"
          loading="lazy"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
    </Styled.AboutMeSection>
  );
};
