import { motion } from "framer-motion";
import styled from "styled-components";

const ContactBreadcrumb = styled(motion.div)`
  width: 100%;
`;

const ContactContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: ${({ theme }) =>
    `calc(100vh - ${theme.sizes.navbar.height} - ${theme.sizes.footer.height})`};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 50px;
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
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray}22;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
