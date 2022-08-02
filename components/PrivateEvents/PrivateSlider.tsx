import Images from "./Images";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export const PrivateSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) =>
          current === Images.length - 1 ? 0 : current + 1
        ),
      6000
    );

    return () => clearInterval(interval);
  }, [index, Images]);

  useEffect(() => {
    console.log(Images.length - 1);
  }, [index]);

  return (
    <div className="pt-8">
      <div className="max-w-md m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="whitespace-nowrap"
        >
          {Images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Trattoria Restaurant"
              width={500}
              height={500}
              className="inline-block mx-2 my-2 rounded-3xl"
              priority
            />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center">
        {Images.map((dot, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className={classNames(
              "mx-2",
              "w-4",
              "h-4",
              "bg-zinc-400",
              "rounded-lg",
              "cursor-pointer",
              "inline-block",
              { "bg-blue-400": index === idx }
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
