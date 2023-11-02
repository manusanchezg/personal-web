import "./styles.css";
import { motion, useScroll, useSpring } from "framer-motion";
import ButtonDarkMode from "../Home/ButtonDarkMode";
import Project from "./Project";
import { data } from "./data";

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
      {data.map((project) => (
        <Project
          id={project.id}
          key={project.id}
          images={project.images}
          link={project.link}
          information={project.information}
        />
      ))}
    </>
  );
}
