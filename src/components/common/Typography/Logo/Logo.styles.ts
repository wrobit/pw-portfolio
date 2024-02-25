import styled from "styled-components";

const Logo = styled.h1`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 28px;
`;

export { Logo };
