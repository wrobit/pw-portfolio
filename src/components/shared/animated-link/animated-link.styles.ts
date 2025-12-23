import { motion } from "framer-motion";
import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

type AnimatedLinkRootProps = {
  $align?: "left" | "center";
};

const AnimatedLinkRoot = styled(motion.a)<AnimatedLinkRootProps>`
  width: fit-content;
  margin: ${({ $align }) => ($align === "center" ? "0 auto" : "0")};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.3)};
  background: transparent;
  cursor: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    opacity: 1;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }
`;

const AnimatedLinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
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

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export { AnimatedLinkContent, AnimatedLinkRoot, ArrowIcon, ArrowWrapper };
