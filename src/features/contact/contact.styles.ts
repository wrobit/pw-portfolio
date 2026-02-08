import { motion } from "framer-motion";
import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

const ContactBreadcrumb = styled(motion.div)`
  width: 100%;
`;

const ContactContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: ${({ theme }) =>
    `calc(100vh - (${theme.sizes.navbar.height} + ${theme.sizes.footer.height}) - ${theme.spacing.xxxxl})`};
  padding-bottom: ${({ theme }) => theme.spacing.xxxxl};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xxl};
    padding-bottom: ${({ theme }) => theme.spacing.xxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;

type ContactContentWrapperProps = {
  width?: string;
};

const ContactContentWrapper = styled(motion.div)<ContactContentWrapperProps>`
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const ContactLinksWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

const ContactEmailRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const ContactEmailBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => hexToRgba(theme.colors.gray, 0.14)};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ContactLinkItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ContactLinkIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const ContactBackgroundImageWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 296px;
  height: 650px;
  z-index: -1;
  animation: blink 1000ms infinite linear;

  @keyframes blink {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @media (max-height: 700px) {
    display: none;
  }
`;

const ContactBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export {
  ContactBackgroundImage,
  ContactBackgroundImageWrapper,
  ContactBreadcrumb,
  ContactContainer,
  ContactContentWrapper,
  ContactLinksWrapper,
  ContactEmailRow,
  ContactEmailBadge,
  ContactLinkItem,
  ContactLinkIcon,
};
