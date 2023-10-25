import { useState, useEffect } from "react";
import SideBar from "./components/SideBar/SideBar";
import { IsSideBarOpen } from "./utils/contexts";
import { motion } from "framer-motion";
import Home from "./components/Home/Home";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <IsSideBarOpen.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen w-screen dark:bg-gray-900"
      >
        <SideBar />
        <Home />
      </motion.div>
    </IsSideBarOpen.Provider>
  );
}

export default App;
