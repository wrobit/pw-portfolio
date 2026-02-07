import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { hexToRgba } from "@utils/helpers/colors.helper";

type WrapperProps = {
  isOpen: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  width: 100%;
  height: ${({ isOpen, theme }) => (isOpen ? "100vh" : theme.sizes.navbar.height)};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: ${({ theme }) => hexToRgba(theme.colors.black, 0.65)};
  backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(12px)" : "blur(4px)")};
  -webkit-backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(12px)" : "blur(4px)")};
  transition: all 300ms ease-in-out;
`;

const NavbarWrapper = styled(motion.div)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbar.height};
  padding: 0 ${({ theme }) => theme.spacing.xxxxxl};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.xxxxl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Link = styled(RouterLink)<{ $isActive?: boolean }>`
  min-width: 50px;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
  margin: 0 16px;
  position: relative;
  text-decoration: none;
  transition: color 100ms linear;

  &:active {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.4)};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
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
  transition: all 100ms linear;
`;

type HamburgerMenuProps = {
  isOpen: boolean;
};

const HamburgerMenu = styled(motion.div)<HamburgerMenuProps>`
  position: absolute;
  top: calc(${({ theme }) => theme.sizes.navbar.height} + 156px);
  width: 100%;
  height: calc(100vh - 156px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HamburgerMenuWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HamburgerMenuLinkIndex = styled.span`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const HamburgerMenuLink = styled(RouterLink)<{ $isActive?: boolean }>`
  margin: 16px 0;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  transition: all 100ms linear;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: ${({ $isActive }) => ($isActive ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: center;
    transition: transform 200ms ease-out;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.8)};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.8)};
  }
`;

export {
  Hamburger,
  HamburgerLine,
  HamburgerMenu,
  HamburgerMenuLink,
  HamburgerMenuLinkIndex,
  HamburgerMenuWrapper,
  Link,
  NavbarWrapper,
  NavLinks,
  Wrapper,
};
