import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

const ProjectPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.xxxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.xxxl};
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const ProjectHero = styled.section<{ $backgroundImage?: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.04)};
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  isolation: isolate;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xl};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $backgroundImage, theme }) =>
      $backgroundImage
        ? `linear-gradient(120deg, ${hexToRgba(theme.colors.black, 0.8)}, ${hexToRgba(
            theme.colors.black,
            0.6
          )}), url(${$backgroundImage})`
        : `linear-gradient(120deg, ${hexToRgba(theme.colors.black, 0.8)}, ${hexToRgba(
            theme.colors.black,
            0.6
          )})`};
    background-size: cover;
    background-position: center;
    opacity: 0.45;
    filter: blur(4px);
    transform: scale(1.03);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      ${hexToRgba("#0b0b0b", 0)} 0%,
      ${hexToRgba("#0b0b0b", 0.6)} 100%
    );
    z-index: -1;
  }
`;

const ProjectHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 780px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Badge = styled.span<{ $variant?: "success" | "neutral" }>`
  padding: 6px ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "success"
        ? hexToRgba(theme.colors.white, 0.3)
        : hexToRgba(theme.colors.white, 0.2)};
  background: ${({ theme, $variant }) =>
    $variant === "success"
      ? hexToRgba(theme.colors.white, 0.08)
      : hexToRgba(theme.colors.white, 0.05)};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ProjectHeroDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.85)};
  line-height: 1.7;
  font-size: 16px;
`;

const ProjectHeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.08)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.14)};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  transition:
    transform 150ms ease,
    background 150ms ease,
    border-color 150ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    background: ${({ theme }) => hexToRgba(theme.colors.white, 0.12)};
    border-color: ${({ theme }) => hexToRgba(theme.colors.white, 0.3)};
  }
`;

const ProjectHeroVisual = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }
`;

const ProjectHeroImageCard = styled.div`
  width: 100%;
  max-width: 560px;
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.06)};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.1)};
  box-shadow: 0 32px 120px ${hexToRgba("#000", 0.35)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectHeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => hexToRgba(theme.colors.black, 0.6)};
`;

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.04)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.08)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.82)};
  line-height: 1.7;
  font-size: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ListItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: flex-start;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.85)};
  line-height: 1.6;
  font-size: 14px;

  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-top: -1px;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.06)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.08)};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  transition:
    border-color 120ms ease,
    color 120ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => hexToRgba(theme.colors.white, 0.4)};
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.85)};
  }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const MetaTile = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => hexToRgba(theme.colors.white, 0.06)};
  border: 1px solid ${({ theme }) => hexToRgba(theme.colors.white, 0.08)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MetaLabel = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
`;

const MetaValue = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 1.4;
`;

export {
  ActionLink,
  Badge,
  BadgeRow,
  Chip,
  Chips,
  ContentGrid,
  ExternalLink,
  LinkList,
  List,
  ListItem,
  MetaGrid,
  MetaLabel,
  MetaTile,
  MetaValue,
  ProjectHero,
  ProjectHeroActions,
  ProjectHeroContent,
  ProjectHeroDescription,
  ProjectHeroImage,
  ProjectHeroImageCard,
  ProjectHeroVisual,
  ProjectPage,
  Section,
  SectionBody,
};
