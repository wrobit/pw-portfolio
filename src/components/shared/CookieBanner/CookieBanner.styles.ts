import { motion } from "framer-motion";
import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

const BannerWrapper = styled(motion.div)`
  position: fixed;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing.lg};
  transform: translateX(-50%);
  width: calc(100% - ${({ theme }) => theme.spacing.xl});
  max-width: 960px;
  z-index: 120;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => hexToRgba(theme.colors.black, 0.92)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.1)};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BannerActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export { Banner, BannerActions, BannerContent, BannerWrapper };
