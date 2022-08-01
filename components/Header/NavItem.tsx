import { MouseEventHandler } from "react";
import classnames from "classnames";

type NavItemProps = {
  content: string;
  mobile?: boolean;
  closeMenu?: MouseEventHandler<HTMLLIElement> | undefined;
};

export const NavItem = ({ content, mobile, closeMenu }: NavItemProps) => {
  const navItemStyle = classnames(
    "text-white tracking-widest uppercase mx-8 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full",
    {
      "my-4": mobile,
    }
  );

  let title;

  if (content === "PrivateEvents") {
    title = "Private Events";
  }

  return (
    <a href={`#${content}`}>
      <li className={navItemStyle} onClick={closeMenu}>
        {title ? title : content}
      </li>
    </a>
  );
};
