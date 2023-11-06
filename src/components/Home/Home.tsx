import { motion } from "framer-motion";
import { useIsSideBarOpen } from "../../hooks/useIsSideBarOpen";
import Cards from "../Cards/Cards";

function Home() {
  const { isSidebarOpen, setIsSidebarOpen } = useIsSideBarOpen();
  return (
    <>
      <div
        className={`pl-5 dark:text-white dark:bg-gray-900 md:fixed max-md:w-screen left-72 ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        <motion.h1
          animate={{ x: [-200, 0] }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="font-semibold"
        >
          Hi There!
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 ml-5 dark:text-slate-300"
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          You are in my website now, nice to meet you 🤗🤗🤗
        </motion.h3>
        <Cards />
      </div>
    </>
  );
}

export default Home;
