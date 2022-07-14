import { BrowserWidth } from "../../pages";
import { useState, useEffect } from "react";
import classnames from "classnames";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";

export const Header = ({ isMobile, innerWidth }: BrowserWidth) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navBarScrolled, setNavBarScrolled] = useState<boolean>(false);

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let headerClass;

  if (navBarScrolled) {
    headerClass = classnames(
      "transition-colors duration-1000 fixed top-0 z-50 flex justify-between w-screen p-4 bg-lightRed"
    );
  } else {
    headerClass = classnames(
      "transition-colors duration-1000 fixed top-0 z-50 flex justify-between w-screen p-4"
    );
  }

  if (isMobile) {
    return (
      <header className={headerClass}>
        <Logo />
        <MobileMenu toggleMenu={toggleMenuHandler} isOpen={isOpen} />
      </header>
    );
  } else {
    return (
      <header className={headerClass}>
        <Logo />
        <Nav />
      </header>
    );
  }
};
