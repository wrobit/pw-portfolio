import { motion } from "framer-motion";
import styled from "styled-components";

export const BreadcrumbWrapper = styled(motion.div)`
  width: 100%;
`;

export const ResumeActions = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xxxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.xxxl};
  }
`;
