import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared";

const Section = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const TypographyWrapper = styled.div<{ isFullWidth?: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectInfoSection = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectInfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const ProjectInfoItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.black}66;
`;

const ProjectInfoLabel = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.orange} !important;
  font-family: ${({ theme }) => theme.font.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProjectInfoValue = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
`;

const ProjectBreadcrumb = styled(motion.div)`
  width: 100%;
`;

const ProjectMediaSection = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectSectionTitle = styled(Typography.Headers.H4)`
  font-family: ${({ theme }) => theme.font.regular};
`;

const ProjectImageWrapper = styled(motion.div)<{ $backgroundImage: string }>`
  width: 100%;
  height: 360px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 180px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const ProjectActivitiesList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ProjectActivitiesItem = styled(motion.li)`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray}33;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectActivitiesIndex = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.font.regular};
`;

const ProjectActivitiesText = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
`;

const ProjectNavigation = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const ProjectNavigationItem = styled.div<{ $align?: "left" | "right" }>`
  display: flex;
  ${({ $align }) => $align === "right" && "margin-left: auto;"}
`;

export {
  ProjectLinksWrapper,
  ProjectInfoGrid,
  ProjectInfoItem,
  ProjectInfoLabel,
  ProjectInfoSection,
  ProjectInfoValue,
  Section,
  TypographyWrapper,
  ProjectBreadcrumb,
  ProjectMediaSection,
  ProjectSectionTitle,
  ProjectImageWrapper,
  ProjectImage,
  ProjectActivitiesList,
  ProjectActivitiesItem,
  ProjectActivitiesIndex,
  ProjectActivitiesText,
  ProjectNavigation,
  ProjectNavigationItem,
};
