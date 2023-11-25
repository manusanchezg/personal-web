import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div>
        <Icons icon="bug" size={14}/>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          La página que estás buscando no existe. Puedes regresar a la{" "}
          <Link to="/" className="text-blue-500 underline">
            página de inicio
          </Link>
          .
        </p>
        <img
          className="mx-auto"
          src="https://via.placeholder.com/400"
          alt="Error 404"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
