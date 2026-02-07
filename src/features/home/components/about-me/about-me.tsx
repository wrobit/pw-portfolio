import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import leavesImage from "@assets/leaves.avif";
import { Typography } from "@components/shared";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, hoverScale, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";

import * as Styled from "./about-me.styles";

export const AboutMe = () => {
  const { messages } = useI18n();
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
          <Typography.Headers.H5 as="p">{messages.home.aboutTeaser}</Typography.Headers.H5>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={1.2}>
          <Styled.AboutMeButton
            onClick={handleRouteChange}
            variants={hoverScale}
            initial="initial"
            whileHover="hover"
          >
            {messages.home.aboutCta}
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
