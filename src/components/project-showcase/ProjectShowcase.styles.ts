import styled from "styled-components";

const ProjectShowcaseContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;

export { ProjectShowcaseContainer };
