const animatedCursorOptions = {
  color: "255, 255, 255",
  innerSize: 8,
  innerScale: 0.7,
  outerSize: 8,
  outerAlpha: 0.15,
  outerScale: 5,
  disableOnMobile: true
};

const reactLenisOptions = {
  smoothWheel: true,
  wheelMultiplier: 1.5,
  easing: (t: number) => t * (2 - t)
};

export { animatedCursorOptions, reactLenisOptions };
