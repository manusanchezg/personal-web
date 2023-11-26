import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";
import logo from "../../assets/404-not-found.jpeg";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 pl-[15%]">
      <div className="text-center">
        <div className="flex justify-center gap-8">
          <Icons icon="bug" size={10} />
          <h1 className="text-4xl font-bold mb-4">404</h1>
        </div>
        <h2 className="text-2xl font-medium">Page not found 😅</h2>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for does not exist, you can come back to{" "}
          <Link to="/" className="text-blue-500 underline">
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
