import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Logo } from "@components/shared";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { Locale } from "@utils/i18n/i18n.types";

import { menuItemVariants, menuVariants } from "./navbar.animations";
import * as Styled from "./navbar.styles";

export const Navbar = () => {
  const { messages, locale, setLocale } = useI18n();
  const location = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const menuItems = [
    { path: routes.work, label: messages.nav.work, index: 1 },
    { path: routes.about, label: messages.nav.about, index: 2 },
    { path: routes.pricing, label: messages.nav.pricing, index: 3 },
    { path: routes.contact, label: messages.nav.contact, index: 4 },
  ];

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
  };

  const onRouteChange = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    onRouteChange();
  }, [location]);

  const renderNavbar = () => (
    <Styled.NavbarWrapper
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Logo />
      <Styled.NavLinks>
        {menuItems.map((item) => (
          <Styled.Link key={item.path} to={item.path} $isActive={location.pathname === item.path}>
            {item.label}
          </Styled.Link>
        ))}
        <Styled.LanguageSwitcher aria-label={messages.language.switcherLabel}>
          <Styled.LanguageButton
            type="button"
            onClick={() => handleLocaleChange("en")}
            $isActive={locale === "en"}
          >
            {messages.language.en}
          </Styled.LanguageButton>
          <Styled.LanguageButton
            type="button"
            onClick={() => handleLocaleChange("pl")}
            $isActive={locale === "pl"}
          >
            {messages.language.pl}
          </Styled.LanguageButton>
        </Styled.LanguageSwitcher>
      </Styled.NavLinks>
      <Styled.Hamburger
        isOpen={isHamburgerOpen}
        onClick={() => setIsHamburgerOpen((prev) => !prev)}
        aria-label={isHamburgerOpen ? messages.nav.closeMenu : messages.nav.openMenu}
        aria-expanded={isHamburgerOpen}
        aria-controls="mobile-navigation"
      >
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
      </Styled.Hamburger>
    </Styled.NavbarWrapper>
  );

  const renderHamburgerMenu = () => (
    <AnimatePresence mode="wait">
      {isHamburgerOpen && (
        <Styled.HamburgerMenu id="mobile-navigation" isOpen={isHamburgerOpen}>
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ width: "100%", height: "100%" }}
          >
            <Styled.HamburgerMenuWrapper>
              {menuItems.map((item) => (
                <motion.div key={item.path} variants={menuItemVariants}>
                  <Styled.HamburgerMenuLink
                    to={item.path}
                    $isActive={location.pathname === item.path}
                  >
                    <Styled.HamburgerMenuLinkIndex>{`${item.index} `}</Styled.HamburgerMenuLinkIndex>
                    {item.label}
                  </Styled.HamburgerMenuLink>
                </motion.div>
              ))}
              <Styled.MobileLanguageSwitcher aria-label={messages.language.switcherLabel}>
                <Styled.LanguageButton
                  type="button"
                  onClick={() => handleLocaleChange("en")}
                  $isActive={locale === "en"}
                >
                  {messages.language.en}
                </Styled.LanguageButton>
                <Styled.LanguageButton
                  type="button"
                  onClick={() => handleLocaleChange("pl")}
                  $isActive={locale === "pl"}
                >
                  {messages.language.pl}
                </Styled.LanguageButton>
              </Styled.MobileLanguageSwitcher>
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
