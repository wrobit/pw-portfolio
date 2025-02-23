import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.sizes.footer.height};
  padding: 0 ${({ theme }) => theme.spacing.xxxxxl};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.xxxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

export { Footer };
