import { hexToRgba } from "@utils/helpers/colors.helper";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

type WrapperProps = {
  isOpen: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "40vh" : "88px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: ${({ theme }) => hexToRgba(theme.colors.black, 0.8)};
`;

const NavbarWrapper = styled.div`
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
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.8)};
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

const Hamburger = styled.button<HamburgerProps>`
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

type HamburgerMenuProps = {
  isOpen: boolean;
};

const HamburgerMenu = styled.div<HamburgerMenuProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;

  ${({ isOpen }) =>
    isOpen && {
      opacity: 1,
      visibility: "visible"
    }}
`;

const HamburgerMenuLink = styled(RouterLink)`
  margin: 16px 0;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 21px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  transition: all 200ms ease-in-out;

  &:active {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.8)};
  }
`;

export { Wrapper, NavbarWrapper, NavLinks, Link, Hamburger, HamburgerLine, HamburgerMenu, HamburgerMenuLink };
