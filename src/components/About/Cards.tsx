import { useEffect } from "react";
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

  return (
    <div className="flex flex-col justify-center align-center">
      {cards.map((card, index) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }
        }, [controls, inView]);

        return (
          <CardAbout
            key={index}
            jobTitle={card.jobTitle}
            company={card.company}
            duration={card.duration}
            description={card.description}
            controls={controls}
            ref={ref}
          />
        );
      })}
    </div>
  );
};

export default Cards;
