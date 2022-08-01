import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <NavItem content="About" />
        <NavItem content="Menu" />
        <NavItem content="PrivateEvents" />
        <NavItem content="Contact" />
        <NavItem content="Gallery" />
      </ul>
    </nav>
  );
};
