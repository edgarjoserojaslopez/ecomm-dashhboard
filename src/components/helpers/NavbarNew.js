import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/capres.jpg";

function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-yellow-300 sm:flex z-40 sm:justify-between sm:items-center sm:px-4 sm:py-2 relative">
      <div className="flex items-center justify-between px-4 py-2 sm:p-0">
        <div className="pl-0">
          <Link to="/" className="">
            <img className="h-14" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleToggle}
            type="button"
            className="block  text-gray-700 hover:text-gray-100 focus:text-gray-100 focus:outline-none"
          >
            {/* <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-2 pr-2 text-gray-600 sm:flex`}
      >
        <Link
          className=" block pr-2 px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/about"
        >
          Nosotros
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/socios"
        >
          Asociados
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/delegados"
        >
          Delegados
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/servicios"
        >
          Servicios
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/descargas"
        >
          Descargas
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-gray-500 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 sm:mt-0 sm:ml-2"
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default NavbarNew;
