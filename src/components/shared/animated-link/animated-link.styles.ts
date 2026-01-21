import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

type AnimatedLinkRootProps = {
  $align?: "left" | "center";
  $size?: "normal" | "big";
  $disabled?: boolean;
};

type AnimatedLinkContentProps = {
  $direction?: "left" | "right";
};

type ArrowIconProps = {
  $direction?: "left" | "right";
};

const AnimatedLinkRoot = styled(motion.a)<AnimatedLinkRootProps>`
  width: fit-content;
  margin: ${({ $align }) => ($align === "center" ? "0 auto" : "0")};
  padding: ${({ theme, $size }) =>
    $size === "big" ? `${theme.spacing.lg} 0` : `${theme.spacing.md} 0`};
  border-bottom: 1px solid
    ${({ theme, $disabled }) => hexToRgba(theme.colors.white, $disabled ? 0.2 : 0.3)};
  background: transparent;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "none")};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 0.8)};
  position: relative;
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme, $disabled }) =>
      hexToRgba(theme.colors.white, $disabled ? 0.2 : 1)};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
  }

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        opacity: 1;

        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme, $size }) =>
      $size === "big" ? `${theme.spacing.md} 0` : `${theme.spacing.sm} 0`};
  }
`;

const AnimatedLinkContent = styled.div<AnimatedLinkContentProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: ${({ $direction }) => ($direction === "left" ? "row-reverse" : "row")};
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ArrowWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
`;

const ArrowIcon = styled.img<ArrowIconProps>`
  width: 20px;
  height: 20px;
  display: block;
  transform: ${({ $direction }) => ($direction === "left" ? "rotate(180deg)" : "none")};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export { AnimatedLinkContent, AnimatedLinkRoot, ArrowIcon, ArrowWrapper };
