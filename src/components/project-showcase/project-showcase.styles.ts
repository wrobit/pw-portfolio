import styled from "styled-components";

import { Typography } from "@components/shared";
import { hexToRgba } from "@utils/helpers/colors.helper";

const ProjectShowcaseContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectShowcaseWrapper = styled.div<{ $isWorkPage?: boolean }>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $isWorkPage }) => ($isWorkPage ? theme.spacing.xxxl : theme.spacing.xl)};
  margin-top: ${({ theme, $isWorkPage }) => ($isWorkPage ? theme.spacing.xxl : 0)};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectShowcaseSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectShowcaseHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProjectShowcaseTitle = styled(Typography.Headers.H4)`
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.h6};
  }
`;

const ProjectShowcaseDescription = styled(Typography.Headers.H6)`
  color: ${({ theme }) => hexToRgba(theme.colors.white, 0.66)};
  max-width: 720px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.body};
  }
`;

export {
  ProjectShowcaseContainer,
  ProjectShowcaseWrapper,
  ProjectShowcaseSection,
  ProjectShowcaseHeader,
  ProjectShowcaseTitle,
  ProjectShowcaseDescription,
};
