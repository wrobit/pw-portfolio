import { Typography } from "@components/common";
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectBoxContainer = styled(motion.div)`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    gap: ${({ theme }) => theme.spacing.md};
  }
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

const ProjectBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.xl};
  transform: scale(1.01);
  transition: transform 0.3s ease-out;
`;

export { ProjectBoxContainer, ProjectBoxImage, ProjectBoxImageWrapper, ProjectBoxLink, ProjectBoxTitle };
