import { motion } from "framer-motion";

import RightArrow from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/shared";
import { useHoverAnimation } from "@utils/animations/hooks";
import { arrowHover, fadeInUp, linkHover } from "@utils/animations/variants";

import {
  AnimatedLinkContent,
  AnimatedLinkRoot,
  ArrowIcon,
  ArrowWrapper,
} from "./animated-link.styles";
import { AnimatedLinkProps } from "./animated-link.types";

export const AnimatedLink = ({
  label,
  delay = 0,
  href,
  target,
  rel,
  onClick,
  align = "center",
}: AnimatedLinkProps) => {
  const { isHovered, hoverProps } = useHoverAnimation();

  return (
    <AnimatedLinkRoot
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      $align={align}
      {...hoverProps}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      <motion.div variants={linkHover} initial="initial" animate={isHovered ? "hover" : "initial"}>
        <AnimatedLinkContent>
          <Typography.Headers.H6>{label}</Typography.Headers.H6>
          <ArrowWrapper
            variants={{ ...arrowHover, hover: { ...arrowHover.hover, scale: 0.9, x: 0 } }}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            <ArrowIcon src={RightArrow} alt="arrow" />
          </ArrowWrapper>
        </AnimatedLinkContent>
      </motion.div>
    </AnimatedLinkRoot>
  );
};
