import styled from "styled-components";

const H3 = styled.h3`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export { H3 };
