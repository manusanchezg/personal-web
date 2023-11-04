import { createContext } from "react";

export const IsSideBarOpen = createContext<
  | {
      isSidebarOpen: boolean;
      setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const IsTypingComplete = createContext<
  | {
      isTypingComplete: boolean;
      setIsTypingComplete: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);
