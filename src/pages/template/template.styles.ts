import styled from "styled-components";

export const PageTemplateWrapper = styled.div`
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.navbar.height} - ${theme.sizes.footer.height})`};
  width: 100%;
  padding: 0 152px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 112px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 32px;
  }
`;
