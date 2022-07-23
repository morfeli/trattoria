import Link from "next/link";
export const YelpSVG = () => {
  return (
    <Link href="https://www.yelp.com/biz/trattoria-il-cafone-lyndhurst">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="m-8 cursor-pointer"
      >
        <rect width="512" height="512" fill="#d32323" rx="15%"></rect>
        <path
          fill="#fff"
          d="M152 311s-16 3-18-13 0-40 6-55 20-9 20-9l65 32s19 13-3 27m36 28s-6-20-24-8l-49 54s-10 13 3 22 35 19 54 20 15-14 15-14m41-100s-20-1-17 19l40 64s10 12 20 5 28-28 36-45-9-20-9-20m-85-66s-6 19 15 21l72-20s15-7 9-20-18-33-33-45-22 3-22 3m-88 49s18 13 25-8V95s0-15-16-15-56 10-72 19-6 21-6 21"
        ></path>
      </svg>
    </Link>
  );
};
