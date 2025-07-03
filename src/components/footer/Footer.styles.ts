import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "@components/shared/Typography/Typography";
import { hexToRgba } from "@utils/helpers/colors.helper";

const Footer = styled(motion.footer)`
  width: 100%;
  min-height: 100px;
  padding: ${({ theme }) =>
    `${theme.spacing.xxxl} ${theme.spacing.xxxxxl} ${theme.spacing.xl} ${theme.spacing.xxxxxl}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing.xxxl} ${theme.spacing.xxxxxl} ${theme.spacing.xl} ${theme.spacing.xxxxxl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing.xxxl} ${theme.spacing.xxxxl} ${theme.spacing.xl} ${theme.spacing.xxxxl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl}`};
  }
`;

const FooterNavigation = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxxxl};
  border-top: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterNavigationLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xxxxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

const FooterNavigationLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterNavigationHeaderText = styled(Typography.Default)`
  font-family: ${({ theme }) => theme.font.bold};
`;

export {
  Footer,
  FooterNavigation,
  FooterNavigationLinksContainer,
  FooterNavigationLinks,
  FooterNavigationHeaderText,
};
