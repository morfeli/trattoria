import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";

export interface BrowserWidth {
  innerWidth: number;
  isMobile: boolean;
}

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const isMobile = innerWidth < 767;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <Header isMobile={isMobile} innerWidth={innerWidth} />
      <Hero isMobile={isMobile} innerWidth={innerWidth} />
    </div>
  );
};

export default Home;
