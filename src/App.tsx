import SideBar from "./components/SideBar/SideBar";
import { motion } from "framer-motion";
import { Outlet } from "react-router";
import React, { useState } from "react";
import { IsSideBarOpen, IsTypingComplete } from "./utils/contexts";
import ButtonDarkMode from "./components/Home/ButtonDarkMode";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  return (
    <IsSideBarOpen.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <IsTypingComplete.Provider
        value={{ isTypingComplete, setIsTypingComplete }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-screen w-screen dark:bg-gray-900 bg-white"
        >
          <ButtonDarkMode />
          <SideBar />
          <React.Fragment>
            <Outlet />
          </React.Fragment>
        </motion.div>
      </IsTypingComplete.Provider>
    </IsSideBarOpen.Provider>
  );
}

export default App;
