import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared";
import { hexToRgba } from "@utils/helpers/colors.helper";

const ListItemHeaderWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ListItemDescription = styled(Typography.Headers.H6).attrs({ as: "p" })`
  width: 100%;
  font-family: ${({ theme }) => theme.font.regular};
`;

const ListRow = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: ${({ theme }) => theme.spacing.xxl};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const TechnologiesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export { ListItemContent, ListItemDescription, ListItemHeaderWrapper, ListRow, TechnologiesList };
