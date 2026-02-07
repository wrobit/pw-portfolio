import styled from "styled-components";

const H2 = styled.h2`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

export { H2 };
