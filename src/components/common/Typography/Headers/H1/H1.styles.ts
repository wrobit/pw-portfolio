import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 84px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

export { H1 };
