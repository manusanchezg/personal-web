"use client";
import { useEffect, useRef } from "react";
import { useIsSideBarOpen } from "../../hooks/useIsSideBarOpen";
import ButtonSideBar from "./ButtonSideBar";
import Title from "./Title";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";

function SideBar() {
  const { isSidebarOpen, setIsSidebarOpen } = useIsSideBarOpen();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        if (window.innerWidth < 768) closeSidebar();
      }
    }
  };

  return (
    <>
      <ButtonSideBar buttonRef={buttonRef} />
      <aside
        id="logo-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-68 h-screen transition-transform md:translate-x-0 ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link
            to="/"
            className="flex items-center p-2 dark:text-white"
            onClick={closeSidebar}
          >
            <Title />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/about"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar}
              >
                <Icons icon="about" size={6} />
                <span className="ml-3">About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={closeSidebar}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Icons icon="portfolio" />
                <span className="flex-1 ml-3 whitespace-nowrap">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar}
              >
                <Icons icon="contact" />
                <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar}
              >
                <Icons icon="donate" />
                <span className="flex-1 ml-3 whitespace-nowrap">Donate 💝</span>
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={closeSidebar}
              >
                <Icons icon="products" />
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
