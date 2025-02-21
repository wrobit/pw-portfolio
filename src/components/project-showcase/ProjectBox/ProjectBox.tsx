import UpperRightArrow from "@assets/icons/arrow-upper-right.svg";
import { hexToRgba } from "@utils/helpers/colors.helper";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "styled-components";
import * as Styled from "./ProjectBox.styles";
import { ProjectBoxProps } from "./ProjectBox.types";

export const ProjectBox = ({ title, image, id, index }: ProjectBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <Styled.ProjectBoxContainer
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.2,
        ease: "easeOut"
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          filter: isHovered ? "brightness(1.1)" : "brightness(1)"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Styled.ProjectBoxImageWrapper href={`/project/${id}`}>
          <motion.div
            className="glass-overlay"
            animate={{
              opacity: isHovered ? 1 : 0,
              backdropFilter: "blur(10px)",
              backgroundColor: hexToRgba(theme.colors.black, 0.1)
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
          animate={{
            x: isHovered ? 0 : -5,
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Styled.ProjectBoxTitle>{title}</Styled.ProjectBoxTitle>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.img
              src={UpperRightArrow}
              alt="arrow"
              animate={{
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              style={{ display: "block" }}
            />
          </motion.div>
        </motion.div>
      </Styled.ProjectBoxLink>
    </Styled.ProjectBoxContainer>
  );
};
