import { motion } from "framer-motion";
import styled from "styled-components";

export const BreadcrumbWrapper = styled(motion.div)`
  width: 100%;
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
