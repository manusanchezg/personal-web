import React from "react";
import Cards from "./Cards";
import { jobs, studies } from "./data";
import { motion } from "framer-motion";

function About() {
  return (
    <main className="flex flex-col align-center">
      <motion.h1 className="ml-7 text-center dark:text-slate-300">
        Here you can see a little bit of my experience
      </motion.h1>
      <Cards data={jobs} />
      <Cards data={studies} />
    </main>
  );
}

export default About;
