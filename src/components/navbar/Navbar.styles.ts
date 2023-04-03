import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 88px;
  padding: 0 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 152px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 112px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 32px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Link = styled(RouterLink)`
  width: 50px;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
  margin: 0 16px;

  &:active {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
