import styled from "styled-components";

const Logo = styled.h1`
  color: ${({ theme, color }) => color || theme.colors.orange};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.logo};
  line-height: ${({ theme }) => theme.fontSize.logo};
`;

export { Logo };
