import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import ButtonDarkMode from "../Home/ButtonDarkMode";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="dark:bg-slate-900 w-screen relative flex justify-center items-center h-screen snap-center">
      <div
        ref={ref}
        className="w-80 h-96 relative max-h-[90vh] m-6 overflow-hidden"
      >
        <img
          src={`/${id}.jpg`}
          className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
          alt="A London skyscraper"
        />
      </div>
      <motion.h2
        className="text-slate-600 dark:text-slate-300 font-semibold text-5xl"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 150,
    restDelta: 0.001,
  });

  return (
    <>
      <ButtonDarkMode />
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div
        className="fixed left-0 right-0 bottom-5 h-2 bg-slate-500"
        style={{ scaleX }}
      />
    </>
  );
}
