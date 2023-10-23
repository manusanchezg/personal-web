import { motion } from "framer-motion";
import ButtonDarkMode from "./ButtonDarkMode";

function Home() {
  return (
    <>
      <ButtonDarkMode />
      <div className="pl-72 min-h-screen w-screen dark:text-white dark:bg-gray-900">
        <motion.h1
          animate={{ x: [-200, 0] }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="font-semibold pt-4"
        >
          Hi There!
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 ml-5 dark:text-slate-300"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          You are in my website now, nice to meet you 🤗🤗🤗
        </motion.h3>
      </div>
    </>
  );
}

export default Home;
