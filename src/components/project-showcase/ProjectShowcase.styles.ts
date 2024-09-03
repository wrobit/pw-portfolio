import styled from "styled-components";

const ProjectShowcaseContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export { ProjectShowcaseContainer };
