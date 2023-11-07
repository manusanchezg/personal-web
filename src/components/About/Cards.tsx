import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardAbout from "./CardAbout";

const Cards = () => {
  const cards = [
    {
      jobTitle: "tu vieja en tanga",
      company: "la de eia",
      duration: "5 anos",
      description: "no hice nada",
    },
    {
      jobTitle: "tu vieja en tanga",
      company: "la de eia",
      duration: "5 anos",
      description: "no hice nada",
    },
    {
      jobTitle: "tu vieja en tanga",
      company: "la de eia",
      duration: "5 anos",
      description: "no hice nada",
    },
    {
      jobTitle: "tu vieja en tanga",
      company: "la de eia",
      duration: "5 anos",
      description: "no hice nada",
    },
  ];

  const controlsArray = cards.map(() => useAnimation());
  const refArray = cards.map(() => useRef<HTMLDivElement>(null));
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach((controls) => controls.start("visible"));
    }
  }, [controlsArray, inView]);

  return (
    <div
      className="p-6 flex flex-col justify-center items-center dark:bg-slate-900"
      ref={inViewRef}
    >
      {cards.map((card, index) => (
        <CardAbout
          key={index}
          jobTitle={card.jobTitle}
          company={card.company}
          duration={card.duration}
          description={card.description}
          controls={controlsArray[index]}
          ref={(el) => el && (inView ? controlsArray[index].start("visible") : null)}
        />
      ))}
    </div>
  );
};

export default Cards;
