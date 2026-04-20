import styled from "styled-components";

const Logo = styled.h1`
  color: ${({ theme, color }) => color || theme.colors.orange};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.logo};
  line-height: ${({ theme }) => theme.fontSize.logo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 120px;
    line-height: 120px;
  }
`;

export { Logo };
