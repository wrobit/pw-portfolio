import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared";
import { hexToRgba } from "@utils/helpers/colors.helper";

const ExperienceSection = styled(motion.div)`
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

const ExperienceTypographyWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ExperienceTimeline = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ExperienceTimelineRow = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1.25fr 1fr 0.75fr;
  padding-bottom: ${({ theme }) => theme.spacing.xxl};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const ExperienceTimelineItem = styled(Typography.Headers.H2)`
  width: 100%;
  font-family: ${({ theme }) => theme.font.regular};
`;

const ExperienceTimelineHeaderItem = styled(Typography.Headers.H2)`
  width: 100%;
`;

export {
  ExperienceSection,
  ExperienceTypographyWrapper,
  ExperienceTimeline,
  ExperienceTimelineRow,
  ExperienceTimelineItem,
  ExperienceTimelineHeaderItem,
};
