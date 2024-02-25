import styled from "styled-components";

const H5 = styled.h5`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 20px;
`;

export { H5 };
