import { motion } from "framer-motion";
import React from "react";
import TypewriterEffect from "../Cards/CardBody";
import Icons from "../Icons/Icons";

function ProjectModalInfo({
  buttonClicked,
  information,
  handleClick,
}: {
  buttonClicked: boolean;
  information: string;
  handleClick: () => void;
}) {
  return (
    <div
      className={`${
        buttonClicked ? "" : "hidden"
      } absolute h-full w-full top-0 left-0`}
    >
      <div className="absolute h-full w-full top-0 left-0 backdrop-blur-sm flex items-center justify-center">
        <TypewriterEffect text={information} isOpen={buttonClicked} style="text-xl font-semibold dark:bg-slate-900 dark:text-slate-200 bg-white" />
        <motion.button
          className="absolute top-3 right-3"
          onClick={handleClick}
        >
            <Icons icon="cross" size={10} />
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectModalInfo;
