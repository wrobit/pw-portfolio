import RightArrow from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/common";
import { motion } from "framer-motion";
import { useState } from "react";
import * as Styled from "./MoreWork.styles";

type MoreWorkProps = {
  delay: number;
};

export const MoreWork = ({ delay }: MoreWorkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Styled.MoreWorkLink
      href="/work"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
    >
      <motion.div
        animate={{
          x: isHovered ? 5 : 0,
          opacity: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      >
        <Styled.MoreWorkContent>
          <Typography.Headers.H6>More work</Typography.Headers.H6>
          <Styled.ArrowWrapper
            animate={{
              scale: isHovered ? 1 : 0.9
            }}
            transition={{ duration: 0.2 }}
          >
            <Styled.ArrowIcon src={RightArrow} alt="arrow" />
          </Styled.ArrowWrapper>
        </Styled.MoreWorkContent>
      </motion.div>
    </Styled.MoreWorkLink>
  );
};
