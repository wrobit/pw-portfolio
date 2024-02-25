import styled from "styled-components";

const Small = styled.span`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
`;

export { Small };
