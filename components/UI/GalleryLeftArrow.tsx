import { MouseEventHandler } from "react";

type GalleryLeftArrowProps = {
  slideLeft: MouseEventHandler<SVGSVGElement>;
};

export const GalleryLeftArrow = ({ slideLeft }: GalleryLeftArrowProps) => {
  return (
    <svg
      onClick={slideLeft}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fillRule="evenodd"
      clipRule="evenodd"
      className="z-50 scale-105 cursor-pointer sm:scale-150"
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm3 5.753L8.56 12 15 17.263l-.678.737L7 12l7.335-6 .665.753z"></path>
    </svg>
  );
};
