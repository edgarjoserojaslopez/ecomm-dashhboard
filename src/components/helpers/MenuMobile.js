import React from "react";
import { Link } from "react-router-dom";

function MenuMobile({ mobileOpen }) {
  return (
    <div
      className="grid  grid-flow-col  grid-rows-3 text-center items-center "
      onClick={mobileOpen}
    >
      <Link
        to="/"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Inicio
      </Link>
      <Link
        to="/about"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Nosotros
      </Link>
      <Link
        to="/asociados"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Asociados
      </Link>
      <Link
        to="/delegados"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Delegados
      </Link>
      <Link
        to="/servicios"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Servicios
      </Link>
      <Link
        to="/descargas"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Descargas
      </Link>
      <Link
        to="/contacto"
        className="p-4   hover:bg-gray-600  hover:text-gray-200 text-gray-600"
      >
        Contacto
      </Link>
    </div>
  );
}

export default MenuMobile;
