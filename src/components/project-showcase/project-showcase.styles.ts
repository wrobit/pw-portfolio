import styled from "styled-components";

import { Typography } from "@components/shared";

const ProjectShowcaseContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectShowcaseWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectShowcaseSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectShowcaseTitle = styled(Typography.Headers.H4)`
  margin: 0;
`;

export {
  ProjectShowcaseContainer,
  ProjectShowcaseWrapper,
  ProjectShowcaseSection,
  ProjectShowcaseTitle,
};
