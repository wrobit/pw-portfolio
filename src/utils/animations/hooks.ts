import { useAnimation, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Hook for handling hover states
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return {
    isHovered,
    handleHover,
    hoverProps: {
      onMouseEnter: () => handleHover(true),
      onMouseLeave: () => handleHover(false)
    }
  };
};

// Hook for scroll-triggered animations
export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  return {
    ref,
    isInView,
    controls
  };
};

// Hook for staggered children animations
export const useStaggerAnimation = (staggerDelay = 0.2) => {
  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5
        }
      }
    }
  };
};
