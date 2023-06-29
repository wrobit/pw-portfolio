import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from "@utils/constants/sizes.constants";
import styled from "styled-components";

const ContactContainer = styled.div`
  height: calc(100vh - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT});
  width: 100%;
  padding: 0 152px 100px 152px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 102px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 32px;
  }
`;

type ContactContentWrapperProps = {
  width?: string;
};

const ContactContentWrapper = styled.div<ContactContentWrapperProps>`
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactLinksWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

export { ContactContainer, ContactContentWrapper, ContactLinksWrapper };
