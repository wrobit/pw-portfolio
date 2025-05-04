import UpperRightArrow from "@assets/icons/arrow-upper-right.svg";
import { useHoverAnimation } from "@utils/animations/hooks";
import { arrowHover, fadeInUp, hoverScale, linkHover } from "@utils/animations/variants";
import { motion } from "framer-motion";
import * as Styled from "./ProjectBox.styles";
import { ProjectBoxProps } from "./ProjectBox.types";

export const ProjectBox = ({ title, image, id, index, isExpanded = false }: ProjectBoxProps) => {
  const { isHovered, hoverProps } = useHoverAnimation();

  return (
    <Styled.ProjectBoxContainer
      {...hoverProps}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.8 + index * 0.2}
      $isExpanded={isExpanded}
    >
      <motion.div
        variants={hoverScale}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Styled.ProjectBoxImageWrapper href={`/project/${id}`}>
          <motion.div
            className="glass-overlay"
            animate={{
              opacity: isHovered ? 1 : 0,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              borderRadius: "inherit"
            }}
          />
          <Styled.ProjectBoxImage src={image} alt={title} loading="lazy" decoding="async" fetchPriority="high" />
        </Styled.ProjectBoxImageWrapper>
      </motion.div>
      <Styled.ProjectBoxLink href={`/project/${id}`}>
        <motion.div
          variants={linkHover}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Styled.ProjectBoxTitle>{title}</Styled.ProjectBoxTitle>
          <motion.div variants={arrowHover} initial="initial" animate={isHovered ? "hover" : "initial"}>
            <motion.img src={UpperRightArrow} alt="arrow" style={{ display: "block" }} />
          </motion.div>
        </motion.div>
      </Styled.ProjectBoxLink>
    </Styled.ProjectBoxContainer>
  );
};
