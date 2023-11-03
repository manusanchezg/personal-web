import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Scroll from "./Scroll";
import ProjectModalInfo from "./ProjectModalInfo";

interface Props {
  id: number;
  images: string[];
  link: string;
  information: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Project({ id, images, information, link }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <section className="dark:bg-slate-900 w-screen relative flex justify-center items-center h-screen snap-center">
      <div
        ref={ref}
        className="w-[47rem] h-[33rem] relative max-h-[90vh] m-6 overflow-hidden"
      >
        <Scroll images={images} information={information} link={link} />
        <ProjectModalInfo buttonClicked={buttonClicked} handleClick={handleClick} information={information} />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.h2
          className="text-slate-600 dark:text-slate-300 font-semibold text-5xl"
          style={{ y }}
        >{`#00${id}`}</motion.h2>
        <motion.button
          onClick={handleClick}
          className="dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 text-gray-900 dark:text-white"
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
}
