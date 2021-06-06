import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/capres.jpg";
import { createPopper } from "@popperjs/core";

function NavbarNew() {
  /* Mobile menu */
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  /* Dropdown */
  /* Dropdown SettingUp */
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20],
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  /* Dropdown SettingUp Starts here */
  return (
    <nav className="bg-blue-500 sm:flex w-full sm:justify-between sm:items-center sm:px-4 sm:py-2 fixed z-10">
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
            className="block  text-yellow-300 hover:text-gray-100 focus:text-gray-100 focus:outline-none"
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
        } px-2 pt-2 pb-2 pr-2 text-gray-50 sm:flex`}
      >
        <Link
          className=" block pr-2 px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500"
          to="/"
        >
          Inicio
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 sm:mt-0 sm:ml-2"
          to="/about"
        >
          Nosotros
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 sm:mt-0 sm:ml-2"
          to="/socios"
        >
          Asociados
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 sm:mt-0 sm:ml-2"
          to="/delegados"
        >
          Delegados
        </Link>
        <button
          className="flex w-full justify-start place-items-center mt-1 md:pl-3 md:pr-1 px-2 py-1 font-semibold rounded focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 text-gray-50 md:mt-0  outline-none focus:outline-none 
          ease-linear transition-all duration-150"
          type="button"
          ref={btnDropdownRef}
          onMouseOver={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          Servicios
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block  ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "flex flex-col " : "hidden ") +
            "text-base z-50 float-left py-2  text-left text-gray-100 pl-2 rounded rounded-t-none shadow-lg  bg-blue-500"
          }
          style={{ minWidth: "12rem" }}
        >
          <Link to="/servicios/haberes">Retiro de Haberes</Link>
          <Link to="/servicios/personal">Préstamos Personales</Link>
          <Link to="/servicios/vivienda">Préstamos de Vivienda</Link>
          <Link to="/servicios/vehiculo">Préstamo de Vehiculo</Link>
          <Link to="/servicios/fondo">Fondo Especial (FEP)</Link>
        </div>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 sm:mt-0 sm:ml-2"
          to="/descargas"
        >
          Descargas
        </Link>
        <Link
          className="mt-1 block px-2 py-1 font-semibold rounded   focus:bg-yellow-300 focus:text-blue-500 hover:bg-yellow-300 hover:text-blue-500 sm:mt-0 sm:ml-2"
          to="/contacto"
        >
          Contacto
        </Link>
      </div>
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-2 pr-2 text-gray-100 sm:flex`}
      >
        <Link
          to="/login"
          className="mt-1 text-gray-100 bg-transparent border border-solid border-gray-100 hover:bg-yellow-300 hover:border-yellow-300 hover:text-blue-500 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-0 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Iniciar sesión
        </Link>
      </div>
    </nav>
  );
}

export default NavbarNew;
