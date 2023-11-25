import React from "react";
import { useIsSideBarOpen } from "../../hooks";

export const Donate = () => {
  const { isSidebarOpen } = useIsSideBarOpen();

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center pl-5 dark:text-white dark:bg-gray-900 max-md:w-screen ${
        isSidebarOpen ? "blur-sm" : ""
      }`}
    >
      Donate
    </div>
  );
};
