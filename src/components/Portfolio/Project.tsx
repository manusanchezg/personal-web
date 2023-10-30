import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Scroll from "./Scroll";

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

  return (
    <section className="dark:bg-slate-900 w-screen relative flex justify-center items-center h-screen snap-center">
      <div
        ref={ref}
        className="w-[40rem] h-[33rem] relative max-h-[90vh] m-6 overflow-hidden"
      >
        <Scroll images={images} information={information} link={link} />
      </div>
      <motion.h2
        className="text-slate-600 dark:text-slate-300 font-semibold text-5xl"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}
