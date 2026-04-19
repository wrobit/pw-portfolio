import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from "@components/shared/link/link";
import { Typography } from "@components/shared/typography/typography";
import { hexToRgba } from "@utils/helpers/colors.helper";

const Footer = styled(motion.footer)`
  width: 100%;
  min-height: 100px;
  padding: ${({ theme }) =>
    `${theme.spacing.xxxl} ${theme.spacing.xxxxxxl} ${theme.spacing.xl} ${theme.spacing.xxxxxxl}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing.xxxl} ${theme.spacing.xxxxl} ${theme.spacing.xl} ${theme.spacing.xxxxl}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.spacing.xxxl} ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl}`};
  }
`;

const FooterNavigation = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xxxxl};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: ${({ theme }) => theme.spacing.xxxxl}; */
  border-top: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterLogo = styled(Typography.Headers.Logo)`
  color: ${({ theme }) => theme.colors.orange};
`;

const FooterNavigationLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xxxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    gap: ${({ theme }) => theme.spacing.xxl};
    justify-content: space-between;
  }
`;

const FooterNavigationLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterNavigationHeaderText = styled(Typography.Default)`
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.h6};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

const FooterNavigationLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export {
  Footer,
  FooterNavigation,
  FooterNavigationLinksContainer,
  FooterNavigationLinks,
  FooterNavigationHeaderText,
  FooterNavigationLink,
  FooterLogo,
};
