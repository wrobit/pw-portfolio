import { motion } from "framer-motion";
import styled from "styled-components";

import { paths, strokeStyle, variants } from "../animations/ContactBackground.animations";

const StyledSVG = styled(motion.svg)`
  position: absolute;
  width: 25%;
  height: 60%;
  z-index: -1;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;

const ContactBackground = () => {
  return (
    <StyledSVG
      viewBox="0 0 296 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      <motion.path d={paths.hexagon} {...strokeStyle} variants={variants.path} />

      {paths.internalLines.map((path, index) => (
        <motion.path
          key={`internal-line-${index}`}
          d={path}
          {...strokeStyle}
          variants={variants.path}
        />
      ))}

      {paths.verticalLines.map((line, index) => (
        <motion.line
          key={`vertical-line-${index}`}
          x1={line.x}
          x2={line.x}
          y1={line.y1}
          y2={line.y2}
          {...strokeStyle}
          variants={variants.line}
        />
      ))}
    </StyledSVG>
  );
};

export default ContactBackground;
