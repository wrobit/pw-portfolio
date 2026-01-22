import styled from "styled-components";

export const PageTemplateWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xxxxxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.xxxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;
