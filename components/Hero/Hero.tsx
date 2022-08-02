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
    "animate-slide relative bg-slate-300 flex flex-col items-center text-white bg-hero-pattern-1 bg-no-repeat bg-cover bg-center-top-y justify-evenly h-30rem  brightness-75 lg:h-screen"
  );

  return (
    <motion.section className={backgroundOne}>
      <div className="absolute self-center text-center ">
        <h1 className="text-3xl tracking-widest md:text-5xl">
          TRATTORIA Il CAFONE
        </h1>
        <p className="text-xl tracking-wider pt-14 md:text-3xl">
          Rustic Italian Cusine
        </p>
      </div>
      <div className="absolute bottom-0 self-end justify-between hidden mr-8 w-96 md:flex">
        <FacebookSVG />
        <InstagramSVG />
        <YelpSVG />
      </div>
    </motion.section>
  );
};
