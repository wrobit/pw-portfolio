import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 50px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const ContactLinksWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

export { ContactContainer, ContactContentWrapper, ContactLinksWrapper };
