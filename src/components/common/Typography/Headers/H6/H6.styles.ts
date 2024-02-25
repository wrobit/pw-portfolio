import styled from "styled-components";

const H6 = styled.h6`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export { H6 };
