import { Typography } from "@components/common";
import { FOOTER_HEIGHT } from "@utils/constants/sizes.constants";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: ${FOOTER_HEIGHT};
  padding: 0 125px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 112px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 32px;
  }
`;

const CopyrightText = styled(Typography)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export { Footer, CopyrightText };
