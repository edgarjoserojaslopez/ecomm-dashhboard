import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/capres.jpg";
function Navbar({ abrirCerrar }) {
  return (
    <nav className="flex justify-between items-center  h-16 bg-white text-black relative shadow-sm">
      <Link to="/" className="pl-4">
        <img className="w-14 h-14" src={logo} alt="logo" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={abrirCerrar}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pr-8 hidden md:flex">
        <Link to="/" className="p-4 ">
          Home
        </Link>
        <Link to="/about" className="p-4 ">
          About
        </Link>
        <Link to="/contacto" className="p-4 ">
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
