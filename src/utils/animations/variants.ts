import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
};

export const hoverScale: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const linkHover: Variants = {
  initial: {
    x: -5,
    opacity: 0.8,
  },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const arrowHover: Variants = {
  initial: {
    x: 0,
    scale: 0.8,
  },
  hover: {
    x: 5,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const svgPath: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
