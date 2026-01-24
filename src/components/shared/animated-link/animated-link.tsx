import { motion } from "framer-motion";

import RightArrow from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/shared";
import { useHoverAnimation } from "@utils/animations/hooks";
import { arrowHover, fadeInUp, linkHover } from "@utils/animations/variants";

import {
  AnimatedLinkButtonRoot,
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
  disabled = false,
  align = "center",
  direction = "right",
  size = "normal",
  as = "a",
}: AnimatedLinkProps) => {
  const { isHovered, hoverProps } = useHoverAnimation();
  const shouldHover = !disabled && isHovered;
  const contentVariants =
    direction === "left"
      ? {
          ...linkHover,
          initial: { ...linkHover.initial, x: 5 },
          hover: { ...linkHover.hover, x: 0 },
        }
      : linkHover;

  const isButton = as === "button";
  const sharedProps = {
    onClick: disabled
      ? undefined
      : () => {
          onClick?.();
        },
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : undefined,
    $align: align,
    $size: size,
    $disabled: disabled,
    ...(disabled ? {} : hoverProps),
    variants: fadeInUp,
    initial: "hidden",
    animate: "visible",
    custom: delay,
  };

  const content = (
    <motion.div
      variants={contentVariants}
      initial="initial"
      animate={shouldHover ? "hover" : "initial"}
    >
      <AnimatedLinkContent $direction={direction}>
        <Typography.Headers.H6 as="span">{label}</Typography.Headers.H6>
        <ArrowWrapper
          variants={{ ...arrowHover, hover: { ...arrowHover.hover, scale: 0.9, x: 0 } }}
          initial="initial"
          animate={shouldHover ? "hover" : "initial"}
        >
          <ArrowIcon src={RightArrow} alt="arrow" $direction={direction} />
        </ArrowWrapper>
      </AnimatedLinkContent>
    </motion.div>
  );

  if (isButton) {
    return (
      <AnimatedLinkButtonRoot type="button" {...sharedProps}>
        {content}
      </AnimatedLinkButtonRoot>
    );
  }

  return (
    <AnimatedLinkRoot
      href={disabled ? undefined : href}
      target={disabled ? undefined : target}
      rel={disabled ? undefined : rel}
      {...sharedProps}
    >
      {content}
    </AnimatedLinkRoot>
  );
};
