import { Typography } from "@components/common";
import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.navbar.height} - ${theme.sizes.footer.height})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(calc(-50%));
  gap: 2rem;
`;

const ErrorTitle = styled(Typography.Headers.H2)`
  width: 80%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export { ErrorContainer, ErrorContentWrapper, ErrorTitle };
