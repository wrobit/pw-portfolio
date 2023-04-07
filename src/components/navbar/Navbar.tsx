import { Logo } from "@components/common";
import { routes } from "@utils/constants/routes.constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./Navbar.styles";

export const Navbar = () => {
  const location = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const onRouteChange = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    onRouteChange();
  }, [location]);

  return (
    <Styled.Wrapper isOpen={isHamburgerOpen}>
      <Styled.NavbarWrapper>
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
      </Styled.NavbarWrapper>
      {isHamburgerOpen && (
        <Styled.HamburgerMenu isOpen={isHamburgerOpen}>
          <Styled.HamburgerMenuLink to={routes.work}>Work</Styled.HamburgerMenuLink>
          <Styled.HamburgerMenuLink to={routes.about}>About</Styled.HamburgerMenuLink>
          <Styled.HamburgerMenuLink to={routes.contact}>Contact</Styled.HamburgerMenuLink>
        </Styled.HamburgerMenu>
      )}
    </Styled.Wrapper>
  );
};
