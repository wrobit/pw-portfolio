import { Variants } from "framer-motion";

export const timelineVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

export const timelineItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
