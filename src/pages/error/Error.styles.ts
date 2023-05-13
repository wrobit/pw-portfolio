import { Typography } from "@components/common";
import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from "@utils/constants/sizes.constants";
import styled from "styled-components";

const ErrorContainer = styled.div`
  height: calc(100vh - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT});
  width: 100%;
  padding: 0 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 102px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 32px;
  }
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

const ErrorTitle = styled(Typography)`
  width: 80%;
  font-size: 52px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export { ErrorContainer, ErrorContentWrapper, ErrorTitle };
