import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";

import ScrollDownIcon from "@assets/icons/expand-down-double.svg";
import { Button, Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { hexToRgba } from "@utils/helpers/colors.helper";

import * as Styled from "./hero.styles";

type HeroProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  showScrollToExplore?: boolean;
  compactSpacing?: boolean;
};

export const Hero = ({
  title,
  description,
  ctaLabel,
  onCtaClick,
  showScrollToExplore = true,
  compactSpacing = false,
}: HeroProps) => {
  const theme = useTheme();
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);

  useEffect(() => {
    const heroSection = heroSectionRef.current;

    if (!heroSection) {
      return undefined;
    }

    const updateHeight = (height: number) => {
      setHeroSectionHeight(height);
    };

    updateHeight(heroSection.getBoundingClientRect().height);

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroSection) {
          updateHeight(entry.contentRect.height);
        }
      });
    });

    resizeObserver.observe(heroSection);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToExplore = () => {
    const navbarHeight = Number.parseFloat(theme.sizes.navbar.height);
    const scrollTarget = heroSectionHeight || window.innerHeight;

    window.scrollTo({
      top: scrollTarget + navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <Styled.HeroSection
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      $compactSpacing={compactSpacing}
    >
      <Styled.HeroTypographyWrapper $compactSpacing={compactSpacing}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>{title}</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H5 as="p" color={hexToRgba(theme.colors.white, 0.85)}>
            {description}
          </Typography.Headers.H5>
        </motion.div>
        {ctaLabel && onCtaClick && (
          <Styled.HeroActions>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6}>
              <Button type="button" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            </motion.div>
          </Styled.HeroActions>
        )}
      </Styled.HeroTypographyWrapper>

      {showScrollToExplore && (
        <Styled.HeroButtonWrapper>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            whileHover={{ y: -5 }}
          >
            <Styled.HeroButton onClick={scrollToExplore} aria-label="Scroll to explore">
              <Typography.Buttons.Small color="inherit">scroll to explore</Typography.Buttons.Small>
              <Styled.HeroButtonIcon src={ScrollDownIcon} alt="" aria-hidden="true" />
            </Styled.HeroButton>
          </motion.div>
        </Styled.HeroButtonWrapper>
      )}
    </Styled.HeroSection>
  );
};
