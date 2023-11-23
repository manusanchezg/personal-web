import React from "react";
import Cards from "./Cards";
import { jobs, studies } from "./data";
import { motion } from "framer-motion";
import { useIsSideBarOpen } from "../../hooks";

function About() {
  const { isSidebarOpen } = useIsSideBarOpen();
  return (
    <main
      className={`flex flex-col align-center max-md:pl-0 max-md:w-screen pl-64 ${
        isSidebarOpen ? "blur-sm" : ""
      }`}
    >
      <motion.h1 className="ml-7 dark:text-slate-300">
        Here you can see a little bit of my experience
      </motion.h1>
      <motion.h2 className="ml-7 my-2 dark:text-slate-300 text-center text-3xl">
        My studies
      </motion.h2>
      <Cards data={studies} />
      <motion.h2 className="pl-7 py-2 dark:text-slate-300 text-center text-3xl dark:bg-slate-900">
        My Jobs
      </motion.h2>
      <Cards data={jobs} />
    </main>
  );
}

export default About;
