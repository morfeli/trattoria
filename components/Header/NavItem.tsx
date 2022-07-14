type NavItemProps = {
  content: string;
};

export const NavItem = ({ content }: NavItemProps) => {
  return <li className="px-4">{content}</li>;
};
