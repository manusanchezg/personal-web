import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Scroll from "./Scroll";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Project({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="dark:bg-slate-900 w-screen relative flex justify-center items-center h-screen snap-center">
      <div
        ref={ref}
        className="w-80 h-96 relative max-h-[90vh] m-6 overflow-hidden"
      >
        <Scroll />
      </div>
      <motion.h2
        className="text-slate-600 dark:text-slate-300 font-semibold text-5xl"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}