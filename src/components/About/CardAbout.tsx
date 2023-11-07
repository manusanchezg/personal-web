import { AnimationControls, motion } from "framer-motion";
import { forwardRef } from "react";

interface CardAboutProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string[];
  controls: AnimationControls;
}

const CardAbout = forwardRef<HTMLDivElement, CardAboutProps>(
  ({ jobTitle, company, duration, description, controls }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
        className="p-4 mb-4 shadow rounded border w-2/4 max-md:w-3/5 max-sm:w-4/5 h-screen"
      >
        <h3 className="text-lg dark:text-slate-200 font-semibold">
          {jobTitle}
        </h3>
        <div className="flex gap-5 ml-4">
          <p className="text-sm mb-2 dark:text-slate-400 text-gray-500">
            {company}
          </p>
          <p className="text-sm mb-2 dark:text-slate-400 text-gray-500">
            {duration}
          </p>
        </div>
        <ul className="text-sm text-gray-700 dark:text-slate-400">
          {description.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
      </motion.div>
    );
  }
);

export default CardAbout;
