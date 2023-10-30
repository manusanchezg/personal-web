import "./styles.css";
import { motion, useScroll, useSpring } from "framer-motion";
import ButtonDarkMode from "../Home/ButtonDarkMode";
import Project from "./Project";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <>
      <ButtonDarkMode />
      {[1, 2, 3, 4, 5].map((image) => (
        <Project id={image} />
      ))}
      <motion.div
        className="fixed left-0 right-0 bottom-5 h-2 bg-slate-500"
        style={{ scaleX }}
      />
    </>
  );
}
