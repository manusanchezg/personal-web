import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";
import logo from "../../assets/404-not-found.jpeg";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-900 pl-[15%] max-md:pl-0">
      <div className="text-center p-5">
        <div className="flex justify-center gap-8">
          <Icons icon="bug" size={10} />
          <h1 className="text-4xl font-bold mb-4 dark:text-slate-500">404</h1>
        </div>
        <h2 className="text-2xl font-medium dark:text-slate-400">Page not found 😅</h2>
        <p className="text-lg text-gray-600 mb-6 dark:text-slate-300">
          The page you are looking for does not exist, you can come back to the{" "}
          <Link to="/" className="dark:text-slate-200 underline text-bold text-slate-900">
            Home Page
          </Link>
          .
        </p>
        <img className="mx-auto" src={logo} alt="Error 404" />
      </div>
    </div>
  );
};

export default NotFoundPage;
