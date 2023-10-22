import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import { IsSideBarOpen } from "./utils/contexts";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <IsSideBarOpen.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <SideBar />
    </IsSideBarOpen.Provider>
  );
}

export default App;
