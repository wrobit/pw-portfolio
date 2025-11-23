import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared";
import { hexToRgba } from "@utils/helpers/colors.helper";

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

const TypographyWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const List = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ListRow = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1.25fr 1fr 0.75fr;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

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

const ListItem = styled(Typography.Headers.H4)`
  width: 100%;
  font-family: ${({ theme }) => theme.font.regular};
`;

const ListItemHeader = styled(Typography.Headers.H4)`
  width: 100%;
`;

const FooterImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
  }
`;

export { List, ListItem, ListItemHeader, ListRow, Section, TypographyWrapper, FooterImage };
