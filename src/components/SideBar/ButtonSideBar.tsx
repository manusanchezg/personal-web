import React from "react";
import { useIsSideBarOpen } from "../../hooks/useIsSideBarOpen";
import Icons from "../Icons/Icons";

function ButtonSideBar({
  buttonRef,
}: {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
}) {
  const { isSidebarOpen, setIsSidebarOpen } = useIsSideBarOpen();
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <button
      data-drawer-target="logo-sidebar"
      data-drawer-toggle="logo-sidebar"
      aria-controls="logo-sidebar"
      onClick={handleToggleSidebar}
      ref={buttonRef}
      type="button"
      className={`h-10 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
    >
      <span className="sr-only">Open sidebar</span>
      <Icons icon="sideBar" size={6} />
    </button>
  );
}

export default ButtonSideBar;
