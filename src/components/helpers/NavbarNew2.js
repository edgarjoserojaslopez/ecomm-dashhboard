import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/capres.jpg";
function NavbarNew2() {
  return (
    <nav className="flex items-center justify-between font-medium p-4 z-40 w-full fixed mx-auto bg-blue-600">
      <Link to="/" className="">
        <img className="h-14" src={logo} alt="logo" />
      </Link>
      <div className="text-lg text-gray-100 hidden md:flex ml-12">
        <Link
          to="/"
          className="block mt-4 md:inline-block  hover:text-yellow-300 text-gray-100 md:mt-0 mr-10"
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Nosotros
        </Link>
        <Link
          to="/socios"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Asociados
        </Link>
        <Link
          to="/delegados"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Delegados
        </Link>
        <Link
          to="/servicios"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Servicios
        </Link>
        <Link
          to="/descargas"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Descargas
        </Link>
        <Link
          to="/contacto"
          className="block mt-4 md:inline-block text-gray-100 md:mt-0 mr-10"
        >
          Contacto
        </Link>
      </div>
      <div className="flex items-center">
        <div className="mr-5 lg:mr-0">
          <button className="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">
            Sign in
          </button>
          <button className="py-2 px-6 bg-teal-500 hover:bg-teal-600 rounded-md text-white text-lg">
            Sign up
          </button>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-4 py-3 border rounded text-teal-500 border-teal-500 focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarNew2;
