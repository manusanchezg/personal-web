import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardAbout from "./CardAbout";
import { jobs } from "./data";

interface Jobs {
  title: string,
  company: string,
  duration: string,
  description: string[],
}

const Cards = ({data}: {data: Jobs[]}) => {
  const controlsArray = jobs.map(() => useAnimation());
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
      {data.map((job, index) => (
        <CardAbout
          key={index}
          title={job.title}
          company={job.company}
          duration={job.duration}
          description={job.description}
          controls={controlsArray[index]}
          ref={(el) =>
            el && (inView ? controlsArray[index].start("visible") : null)
          }
        />
      ))}
    </div>
  );
};

export default Cards;
