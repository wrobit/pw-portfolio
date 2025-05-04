import RightArrow from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/common";
import { useHoverAnimation } from "@utils/animations/hooks";
import { arrowHover, fadeInUp, linkHover } from "@utils/animations/variants";
import { motion } from "framer-motion";
import * as Styled from "./MoreWork.styles";
import { useNavigate } from "react-router-dom";
import { routes } from "@utils/constants/routes.constants";

type MoreWorkProps = {
  delay: number;
};

export const MoreWork = ({ delay }: MoreWorkProps) => {
  const { isHovered, hoverProps } = useHoverAnimation();
  const navigate = useNavigate();

  return (
    <Styled.MoreWorkLink onClick={() => navigate(routes.work)} {...hoverProps} variants={fadeInUp} initial="hidden" animate="visible" custom={delay}>
      <motion.div variants={linkHover} initial="initial" animate={isHovered ? "hover" : "initial"}>
        <Styled.MoreWorkContent>
          <Typography.Headers.H6>More work</Typography.Headers.H6>
          <Styled.ArrowWrapper
            variants={{ ...arrowHover, hover: { ...arrowHover.hover, scale: 0.9, x: 0 } }}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            <Styled.ArrowIcon src={RightArrow} alt="arrow" />
          </Styled.ArrowWrapper>
        </Styled.MoreWorkContent>
      </motion.div>
    </Styled.MoreWorkLink>
  );
};
