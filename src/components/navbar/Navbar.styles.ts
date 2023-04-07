import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
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

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Link = styled(RouterLink)`
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

type HamburgerProps = {
  isOpen: boolean;
};

const Hamburger = styled.div<HamburgerProps>`
  display: none;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    `
    & > div:nth-child(1) {
      transform: rotate(45deg) translate(4.5px, 4.5px);
    }

    & > div:nth-child(2) {
      opacity: 0;
    }

    & > div:nth-child(3) {
      transform: rotate(-45deg) translate(4.5px, -4.5px);
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const HamburgerLine = styled.div`
  width: 24px;
  height: 2px;
  margin: 4px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transition: all 200ms ease-in-out;
`;

export { Wrapper, NavLinks, Link, Hamburger, HamburgerLine };
