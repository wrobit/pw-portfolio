import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared";

const ProjectBoxContainer = styled(motion.div)<{ $isExpanded: boolean }>`
  height: 500px;
  grid-column: ${({ $isExpanded }) => ($isExpanded ? "span 2" : "span 1")};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectBoxContainerContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ProjectBoxImageWrapper = styled.a`
  width: 100%;
  height: 454px;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  position: relative;
  display: block;
  cursor: none;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 260px;
  }
`;

const ProjectBoxImageWrapperGlassOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: inherit;
`;

const ProjectBoxLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: none;
  display: block;
  margin-top: auto;
`;

const ProjectBoxTitle = styled(Typography.Headers.H6)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const ProjectBoxImageContainer = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.xl};
  transform: scale(1.01);
  transition: transform 0.3s ease-out;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectBoxImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const ProjectBoxLinkContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectBoxIcon = styled.img`
  display: block;
`;

export {
  ProjectBoxContainer,
  ProjectBoxImage,
  ProjectBoxImageWrapper,
  ProjectBoxLink,
  ProjectBoxTitle,
  ProjectBoxIcon,
  ProjectBoxLinkContainer,
  ProjectBoxImageWrapperGlassOverlay,
  ProjectBoxContainerContent,
  ProjectBoxImageContainer,
};
