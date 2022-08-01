import Images from "./Images";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export const PrivateSlider = () => {
  const [data, _] = useState(Images);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) => (current === data.length - 1 ? 0 : current + 1)),
      6000
    );

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="pt-8">
      <div className="max-w-md m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="rounded-lg whitespace-nowrap"
        >
          {data.map((image, i) => (
            <Image
              key={index}
              src={image}
              alt="Based Bears NFT"
              className="inline-block w-full p-4 rounded-3xl"
              priority
            />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center">
        {data.map((dot, idx) => (
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
