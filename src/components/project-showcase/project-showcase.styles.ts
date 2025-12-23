import styled from "styled-components";

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

export { ProjectShowcaseContainer, ProjectShowcaseWrapper };
