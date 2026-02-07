import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";

import ScrollDownIcon from "@assets/icons/expand-down-double.svg";
import { Button, Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { hexToRgba } from "@utils/helpers/colors.helper";

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
    <HeroSection
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      $compactSpacing={compactSpacing}
    >
      <HeroTypographyWrapper $compactSpacing={compactSpacing}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>{title}</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H5 as="p" color={hexToRgba(theme.colors.white, 0.85)}>
            {description}
          </Typography.Headers.H5>
        </motion.div>
        {ctaLabel && onCtaClick && (
          <HeroActions>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6}>
              <Button type="button" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            </motion.div>
          </HeroActions>
        )}
      </HeroTypographyWrapper>

      {showScrollToExplore && (
        <HeroButtonWrapper>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            whileHover={{ y: -5 }}
          >
            <HeroButton onClick={scrollToExplore} aria-label="Scroll to explore">
              <Typography.Buttons.Small color="inherit">scroll to explore</Typography.Buttons.Small>
              <HeroButtonIcon src={ScrollDownIcon} alt="" aria-hidden="true" />
            </HeroButton>
          </motion.div>
        </HeroButtonWrapper>
      )}
    </HeroSection>
  );
};

type HeroLayoutProps = {
  $compactSpacing?: boolean;
};

const HeroSection = styled(motion.div)<HeroLayoutProps>`
  width: 100%;
  margin-top: ${({ theme, $compactSpacing }) => ($compactSpacing ? 0 : theme.spacing.xxl)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $compactSpacing }) => ($compactSpacing ? theme.spacing.lg : theme.spacing.xxxl)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme, $compactSpacing }) => ($compactSpacing ? 0 : theme.spacing.lg)};
  }
`;

const HeroTypographyWrapper = styled.div<HeroLayoutProps>`
  width: ${({ $compactSpacing }) => ($compactSpacing ? "100%" : "80%")};
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $compactSpacing }) => ($compactSpacing ? theme.spacing.lg : theme.spacing.xxl)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HeroButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray};
  border: none;
  cursor: pointer;
  transition: color 200ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    & span {
      color: ${({ theme }) => theme.colors.white};
    }

    & img {
      animation-play-state: paused;
    }
  }
`;

const HeroButtonIcon = styled.img`
  animation: bounce 500ms infinite linear;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 26px;
    height: 26px;
  }
`;
