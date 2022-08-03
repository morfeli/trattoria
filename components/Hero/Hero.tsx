import { HeroSlider } from "./HeroSlider";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { BrowserWidth } from "../../pages";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { SocialLinks } from "./SocialLink";
import { FacebookSVG } from "../UI/FacebookSVG";
import { InstagramSVG } from "../UI/InstagramSVG";
import { YelpSVG } from "../UI/YelpSVG";

export const Hero = ({ isMobile, innerWidth }: BrowserWidth) => {
  const backgroundOne = classNames(
    "animate-slide relative flex flex-col items-center text-white bg-overLay bg-hero-pattern-1 linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%, rgba(0,0,0,0.8) 100%) bg-no-repeat bg-cover bg-center-top-y justify-evenly h-30rem lg:h-screen"
  );

  return (
    <motion.section className={backgroundOne}>
      <div className="absolute self-center text-center drop-shadow-xl ">
        <h1 className="text-3xl tracking-widest md:text-5xl">
          TRATTORIA Il CAFONE
        </h1>
        <p className="text-xl tracking-wider pt-14 md:text-3xl">
          Rustic Italian Cusine
        </p>
      </div>
      <div className="absolute bottom-0 self-end justify-between hidden pb-4 mr-8 w-96 md:flex">
        <FacebookSVG />
        <InstagramSVG />
        <YelpSVG />
      </div>
    </motion.section>
  );
};
