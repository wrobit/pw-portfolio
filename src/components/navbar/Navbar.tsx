import { Logo } from "@components/common";
import { routes } from "@utils/constants/routes.constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./Navbar.styles";

export const MENU_ITEMS = [
  { path: routes.work, label: "Work", index: 1 },
  { path: routes.about, label: "About", index: 2 },
  { path: routes.contact, label: "Contact", index: 3 }
];

export const Navbar = () => {
  const location = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const onRouteChange = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    onRouteChange();
  }, [location]);

  const renderNavbar = () => (
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
  );

  const renderHamburgerMenu = () =>
    isHamburgerOpen && (
      <Styled.HamburgerMenu isOpen={isHamburgerOpen}>
        <Styled.HamburgerMenuWrapper>
          {MENU_ITEMS.map((item, index) => (
            <Styled.HamburgerMenuLink key={item.path} to={item.path}>
              <Styled.HamburgerMenuLinkIndex>{`${index + 1} `}</Styled.HamburgerMenuLinkIndex>
              {item.label}
            </Styled.HamburgerMenuLink>
          ))}
        </Styled.HamburgerMenuWrapper>
      </Styled.HamburgerMenu>
    );

  return (
    <Styled.Wrapper isOpen={isHamburgerOpen}>
      {renderNavbar()}
      {renderHamburgerMenu()}
    </Styled.Wrapper>
  );
};
