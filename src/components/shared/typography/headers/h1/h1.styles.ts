import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme, color }) => color || theme.colors.orange};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 88px;
  line-height: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 64px;
    line-height: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export { H1 };
