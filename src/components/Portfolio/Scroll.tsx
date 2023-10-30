import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg
        className="absolute top-20 left-20 transform -rotate-90"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-accent opacity-30 bg-white"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator stroke-accent bg-slate-500"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul
        ref={ref}
        className="flex list-none h-90 overflow-x-scroll px-5 py-5 mx-auto"
      >
        {[...Array(11)].map((_, index) => (
          <li
            key={index}
            className={`w-60 bg-white ${index === 10 ? "mr-0" : "mr-20"}`}
          ></li>
        ))}
      </ul>
    </>
  );
}
