import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

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
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme, $compactSpacing }) => ($compactSpacing ? 0 : theme.spacing.lg)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.lg};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* gap: ${({ theme, $compactSpacing }) =>
      $compactSpacing ? theme.spacing.md : theme.spacing.lg}; */
    gap: ${({ theme }) => theme.spacing.lg};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};

    & span {
      font-size: calc(${({ theme }) => theme.fontSize.body} - 2px);
    }
  }
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
`;

const HeroButtonIcon = styled.img`
  animation: ${bounceAnimation} 500ms infinite linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(${({ theme }) => theme.spacing.lg} + ${({ theme }) => theme.spacing.sm});
    height: calc(${({ theme }) => theme.spacing.lg} + ${({ theme }) => theme.spacing.sm});
  }
`;

export {
  HeroActions,
  HeroButton,
  HeroButtonIcon,
  HeroButtonWrapper,
  HeroSection,
  HeroTypographyWrapper,
};
