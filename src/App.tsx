import SideBar from "./components/SideBar/SideBar";
import { motion } from "framer-motion";
import { Outlet } from "react-router";


function App() {

  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen w-screen dark:bg-gray-900"
      >
        <SideBar />
        <Outlet />
      </motion.div>
  );
}

export default App;
