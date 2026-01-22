import { motion } from "framer-motion";
import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

const BannerWrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${({ theme }) => theme.spacing.lg};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 120;
`;

const Banner = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => hexToRgba(theme.colors.black, 0.92)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.1)};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 13px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
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

const BannerButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 12px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export { Banner, BannerActions, BannerButton, BannerContent, BannerWrapper };
