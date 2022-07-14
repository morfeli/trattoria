type NavItemProps = {
  content: string;
};

export const NavItem = ({ content }: NavItemProps) => {
  return (
    <li className="text-white tracking-widest uppercase mx-8 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full">
      {content}
    </li>
  );
};
