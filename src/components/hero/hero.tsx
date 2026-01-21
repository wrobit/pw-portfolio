import { motion } from "framer-motion";
import { useRef } from "react";
import styled, { useTheme } from "styled-components";

import ScrollDownIcon from "@assets/icons/expand-down-double.svg";
import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

type HeroProps = {
  title: string;
  description: string;
  showScrollToExplore?: boolean;
};

export const Hero = ({ title, description, showScrollToExplore = true }: HeroProps) => {
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
    <HeroSection ref={heroSectionRef} variants={pageTransition} initial="initial" animate="animate">
      <HeroTypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>{title}</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H4>{description}</Typography.Headers.H4>
        </motion.div>
      </HeroTypographyWrapper>

      {showScrollToExplore && (
        <HeroButtonWrapper>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            whileHover={{ y: -5 }}
          >
            <HeroButton onClick={scrollToExplore}>
              <Typography.Buttons.Small color="inherit">scroll to explore</Typography.Buttons.Small>
              <HeroButtonIcon src={ScrollDownIcon} />
            </HeroButton>
          </motion.div>
        </HeroButtonWrapper>
      )}
    </HeroSection>
  );
};

const HeroSection = styled(motion.div)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const HeroTypographyWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
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
