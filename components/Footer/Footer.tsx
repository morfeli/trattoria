import Image from "next/image";
import LogoImg from "../../public/trattoria-assets/Artboard 4.png";
import { NavItem } from "../Header/NavItem";
import { FacebookSVG } from "../UI/FacebookSVG";

import { InstagramSVG } from "../UI/InstagramSVG";
import { YelpSVG } from "../UI/YelpSVG";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-slate-500">
      <div className="mx-auto">
        <Image src={LogoImg} width={350} height={200} className="self-center" />
      </div>
      <nav className="self-center ">
        <ul className="flex flex-col mx-auto text-center sm:flex-row sm:justify-evenly">
          <NavItem content="About" mobile />
          <NavItem content="Menu" mobile />
          <NavItem content="PrivateEvents" mobile />
          <NavItem content="Gallery" mobile />
          <NavItem content="Contact" mobile />
        </ul>
        <div className="flex flex-col items-center sm:flex-row sm:w-50vw sm:justify-between sm:mx-auto">
          <FacebookSVG />
          <InstagramSVG />
          <YelpSVG />
        </div>
      </nav>
    </footer>
  );
};
