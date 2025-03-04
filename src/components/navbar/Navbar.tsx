import { Logo } from "@components/common";
import { routes } from "@utils/constants/routes.constants";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./Navbar.styles";

export const MENU_ITEMS = [
  { path: routes.work, label: "Work", index: 1 },
  { path: routes.about, label: "About", index: 2 },
  { path: routes.contact, label: "Contact", index: 3 }
];

const menuVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

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
        {MENU_ITEMS.map(item => (
          <Styled.Link key={item.path} to={item.path} $isActive={location.pathname === item.path}>
            {item.label}
          </Styled.Link>
        ))}
      </Styled.NavLinks>
      <Styled.Hamburger isOpen={isHamburgerOpen} onClick={() => setIsHamburgerOpen(prev => !prev)}>
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
      </Styled.Hamburger>
    </Styled.NavbarWrapper>
  );

  const renderHamburgerMenu = () => (
    <AnimatePresence mode="wait">
      {isHamburgerOpen && (
        <Styled.HamburgerMenu isOpen={isHamburgerOpen}>
          <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="hidden" style={{ width: "100%", height: "100%" }}>
            <Styled.HamburgerMenuWrapper>
              {MENU_ITEMS.map(item => (
                <motion.div key={item.path} variants={menuItemVariants}>
                  <Styled.HamburgerMenuLink to={item.path} $isActive={location.pathname === item.path}>
                    <Styled.HamburgerMenuLinkIndex>{`${item.index} `}</Styled.HamburgerMenuLinkIndex>
                    {item.label}
                  </Styled.HamburgerMenuLink>
                </motion.div>
              ))}
            </Styled.HamburgerMenuWrapper>
          </motion.div>
        </Styled.HamburgerMenu>
      )}
    </AnimatePresence>
  );

  return (
    <Styled.Wrapper isOpen={isHamburgerOpen}>
      {renderNavbar()}
      {renderHamburgerMenu()}
    </Styled.Wrapper>
  );
};
