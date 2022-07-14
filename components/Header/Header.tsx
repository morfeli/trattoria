import { BrowserWidth } from "../../pages";
import { useState } from "react";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";

export const Header = ({ isMobile, innerWidth }: BrowserWidth) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };
  if (isMobile) {
    return (
      <header className="flex items-center justify-between bg-medRed p-4">
        <Logo />
        <MobileMenu toggleMenu={toggleMenuHandler} />
      </header>
    );
  } else {
    return (
      <header className="flex items-center justify-between bg-medRed p-4">
        <Logo />
        <Nav />
      </header>
    );
  }
};
