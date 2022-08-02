import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const image1 = require("../../public/trattoria-assets/image1.jpg");
const image2 = require("../../public/trattoria-assets/image2.jpg");
const image3 = require("../../public/trattoria-assets/image3.jpg");
const image4 = require("../../public/trattoria-assets/image4.jpg");
const image5 = require("../../public/trattoria-assets/image5.jpg");

type HeroSliderProps = {
  isMobile: boolean;
  innerWidth: number;
};

export const HeroSlider = ({ isMobile, innerWidth }: HeroSliderProps) => {
  const [index, setIndex] = useState<number>(0);
  const [x, cycleX] = useCycle(image1, image2, image3, image4, image5);

  useEffect(() => {
    const interval = setTimeout(() => {
      cycleX();
    }, 6000);

    return () => clearTimeout(interval);
  }, [x, cycleX]);

  useEffect(() => {
    setIndex((current) => current + 1);
  }, [x]);

  if (isMobile) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          times: [0.17, 0.67, 0.83, 1.0],
        }}
      >
        <div className="">
          <Image
            src={x}
            priority
            layout="responsive"
            width={300}
            height={300}
            className="brightness-50"
          />
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        key={x}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={x}
          width={700}
          height={375}
          priority
          layout="responsive"
          className="brightness-50"
        />
      </motion.div>
    );
  }
};
