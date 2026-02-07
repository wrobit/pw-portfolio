import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { Typography } from "@components/shared";
import { hexToRgba } from "@utils/helpers/colors.helper";

type ControlButtonProps = {
  $isActive?: boolean;
};

type PricingCardProps = {
  $isFeatured?: boolean;
};

export const BreadcrumbWrapper = styled(motion.div)`
  width: 100%;
`;

export const IntroSection = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const IntroLead = styled(Typography.Headers.H4)`
  max-width: 920px;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.85)};
`;

export const ControlsRow = styled(motion.section)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const ControlButtonGroup = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.14)};
  border-radius: 999px;
  background-color: ${({ theme }) => hexToRgba(theme.colors.white, 0.02)};
`;

export const ControlButton = styled.button<ControlButtonProps>`
  min-width: 112px;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 999px;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.75)};
  background-color: transparent;
  transition:
    background-color 150ms ease-in-out,
    color 150ms ease-in-out;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: ${theme.colors.white};
      background-color: ${hexToRgba(theme.colors.white, 0.08)};
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 1px;
  }
`;

export const GroupsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const GroupSection = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const GroupHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const GroupDescription = styled(Typography.Headers.H5)`
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.62)};
  max-width: 720px;
`;

export const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const PricingCard = styled(motion.article)<PricingCardProps>`
  min-height: 100%;
  border-radius: 0;
  border: 1px solid
    ${({ theme, $isFeatured }) =>
      $isFeatured ? hexToRgba(theme.colors.white, 0.18) : hexToRgba(theme.colors.white, 0.09)};
  background-color: ${({ theme }) => hexToRgba(theme.colors.white, 0.01)};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CardDescription = styled(Typography.Headers.H6)`
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.62)};
`;

export const Badge = styled.span`
  width: fit-content;
  color: ${({ theme }) => theme.colors.green};
  padding: 0;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: none;
`;

export const PriceRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PriceRow = styled.div`
  border-top: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.06)};
  border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.06)};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PriceRowSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PriceRowHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const PriceRowCaption = styled(Typography.Headers.H6)`
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.52)};
`;

export const PriceValue = styled(Typography.Headers.H4)`
  font-family: ${({ theme }) => theme.font.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;

export const PriceMeta = styled(Typography.Headers.H6)`
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.66)};
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.9)};

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-top: 0.42rem;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
