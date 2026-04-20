import styled from "styled-components";

const H5 = styled.h5`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export { H5 };
