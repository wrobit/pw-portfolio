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
  grid-template-columns: 0.9fr 1fr 1.4fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectInfoItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
`;

const ProjectInfoLabel = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.font.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProjectInfoValue = styled(Typography.Headers.H6)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
`;

const ProjectInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export {
  ProjectLinksWrapper,
  ProjectInfoGrid,
  ProjectInfoItem,
  ProjectInfoLabel,
  ProjectInfoList,
  ProjectInfoSection,
  ProjectInfoValue,
  Section,
  TypographyWrapper,
};
