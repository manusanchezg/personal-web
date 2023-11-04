import { useContext } from "react";
import { IsTypingComplete } from "../utils/contexts";

export const useIsTypingComplete = () => {
    const context = useContext(IsTypingComplete);
    if (context === undefined) {
      throw new Error("IsTypingComplete must be used inside IsTypingCompleteContext.Provider");
    }
    return context;
  };