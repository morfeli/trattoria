import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { ArrowSVG } from "../UI/ArrowSVG";
import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  id: string;
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const MenuBtn = ({ children, id }: BtnProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Link href={`/menu/${id}`}>
      <motion.button
        className="flex justify-between px-10 py-4 uppercase"
        ref={ref}
        variants={descriptionVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
      >
        {children} <ArrowSVG />
      </motion.button>
    </Link>
  );
};
