import { Logo } from "@components/common/Logo/Logo";
import { routes } from "constants/routes";
import { useState } from "react";
import * as Styled from "./Navbar.styles";

export const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <Logo />
      <Styled.NavLinks>
        <Styled.Link to={routes.work}>Work</Styled.Link>
        <Styled.Link to={routes.about}>About</Styled.Link>
        <Styled.Link to={routes.contact}>Contact</Styled.Link>
      </Styled.NavLinks>
      <Styled.Hamburger isOpen={isHamburgerOpen} onClick={() => setIsHamburgerOpen(prev => !prev)}>
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
      </Styled.Hamburger>
    </Styled.Wrapper>
  );
};
