import styled from "styled-components";

const H4 = styled.h4`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export { H4 };
