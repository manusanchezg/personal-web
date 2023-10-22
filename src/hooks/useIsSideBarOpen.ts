import { useContext } from "react";
import { IsSideBarOpen } from "../utils/contexts";

export const useIsSideBarOpen = () => {
    const context = useContext(IsSideBarOpen);
    if (context === undefined) {
      throw new Error("useIsSideBarOpen must be used inside IsSideBarOpenContext.Provider");
    }
    return context;
  };