import { ArrowSVG } from "../UI/ArrowSVG";
import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  id: string;
};

export const MenuBtn = ({ children, id }: BtnProps) => {
  return (
    <Link href={`/menu/${id}`}>
      <button className="flex justify-between px-10 py-4 uppercase">
        {children} <ArrowSVG />
      </button>
    </Link>
  );
};
