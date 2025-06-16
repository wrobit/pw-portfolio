export const baseAnimation = {
  duration: 6,
  ease: "easeInOut",
  repeat: Infinity,
  times: [0, 0.25, 0.75, 1],
  delay: 0.5,
};

export const strokeStyle = {
  stroke: "rgba(255, 255, 255, 0.5)",
  strokeWidth: "4",
};

export const variants = {
  path: {
    visible: {
      opacity: 0.1,
      pathLength: [0, 1, 1, 0],
      transition: baseAnimation,
    },
  },
  line: {
    visible: {
      opacity: 0.1,
      scaleY: [0, 1, 1, 0],
      transition: baseAnimation,
    },
  },
};

export const paths = {
  hexagon:
    "M24.5649 236.362L147.117 165.606L269.67 236.362V377.873L147.117 448.629L24.5649 377.873V236.362Z",
  internalLines: [
    "M271.874 306.824L147.119 378.617L22.363 306.824",
    "M271.874 270.926L147.119 342.719L22.363 270.926",
    "M271.874 235.029L147.119 306.823L22.363 235.029",
  ],
  verticalLines: [
    { x: "149", y1: "34", y2: "600" },
    { x: "118", y1: "71", y2: "650" },
    { x: "180", y1: "0", y2: "574" },
  ],
};
