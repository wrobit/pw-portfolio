import styled from "styled-components";

const H5 = styled.h5`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export { H5 };
