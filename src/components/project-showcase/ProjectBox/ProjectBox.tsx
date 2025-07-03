import { motion } from "framer-motion";

import UpperRightArrow from "@assets/icons/arrow-upper-right.svg";
import { useHoverAnimation } from "@utils/animations/hooks";
import { arrowHover, fadeInUp, hoverScale, linkHover } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";

import * as Styled from "./ProjectBox.styles";
import { ProjectBoxProps } from "./ProjectBox.types";

export const ProjectBox = ({
  title,
  image,
  id,
  index,
  isExpanded = false,
  backgroundImage,
}: ProjectBoxProps) => {
  const { isHovered, hoverProps } = useHoverAnimation();

  const getProjectLink = (id: number) => `${routes.projects}/${id}`;

  return (
    <Styled.ProjectBoxContainer
      {...hoverProps}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.8 + index * 0.2}
      $isExpanded={isExpanded}
    >
      <Styled.ProjectBoxContainerContent
        variants={hoverScale}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <Styled.ProjectBoxImageWrapper href={getProjectLink(id)}>
          <Styled.ProjectBoxImageWrapperGlassOverlay
            animate={{
              opacity: isHovered ? 1 : 0,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          />
          <Styled.ProjectBoxImageContainer $backgroundImage={backgroundImage}>
            <Styled.ProjectBoxImage
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </Styled.ProjectBoxImageContainer>
        </Styled.ProjectBoxImageWrapper>
      </Styled.ProjectBoxContainerContent>
      <Styled.ProjectBoxLink href={`/project/${id}`}>
        <Styled.ProjectBoxLinkContainer
          variants={linkHover}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <Styled.ProjectBoxTitle>{title}</Styled.ProjectBoxTitle>
          <motion.div
            variants={arrowHover}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            <Styled.ProjectBoxIcon src={UpperRightArrow} alt="arrow" />
          </motion.div>
        </Styled.ProjectBoxLinkContainer>
      </Styled.ProjectBoxLink>
    </Styled.ProjectBoxContainer>
  );
};
