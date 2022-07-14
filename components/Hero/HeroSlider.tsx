import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeroSliderProps = {
  images: StaticImageData[];
  isMobile: boolean;
  innerWidth: number;
};

export const HeroSlider = ({
  images,
  isMobile,
  innerWidth,
}: HeroSliderProps) => {
  const [index, setIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState(images[index]);

  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) =>
          current === images.length - 1 ? 0 : current + 1
        ),
      6000
    );
    return () => clearTimeout(interval);
  }, [index]);

  useEffect(() => {
    setCurrentImage(images[index]);
  }, [index]);

  if (isMobile) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <Image
            src={currentImage}
            priority
            objectFit="cover"
            layout="responsive"
            width={500}
            height={600}
            className="brightness-50"
          />
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={currentImage}
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
