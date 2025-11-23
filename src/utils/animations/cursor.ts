import { ReactNode, CSSProperties } from "react";

interface AnimatedCursorOptions {
  children?: ReactNode;
  color?: string;
  innerScale?: number;
  innerSize?: number;
  innerStyle?: CSSProperties;
  outerAlpha?: number;
  outerScale?: number;
  outerSize?: number;
  outerStyle?: CSSProperties;
}

const animatedCursorOptions: AnimatedCursorOptions = {
  color: "255, 255, 255",
  innerSize: 8,
  innerScale: 0.7,
  outerSize: 8,
  outerAlpha: 0.15,
  outerScale: 5,
  // disableOnMobile: true,
  innerStyle: {
    mixBlendMode: "difference",
  },
  outerStyle: {
    mixBlendMode: "difference",
  },
};

const reactLenisOptions = {
  smoothWheel: true,
  wheelMultiplier: 1.5,
  easing: (t: number) => t * (2 - t),
};

export { animatedCursorOptions, reactLenisOptions };
