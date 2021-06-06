import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/capres.jpg";
import { createPopper } from "@popperjs/core";

function NavbarNew2() {
  /* Toggle Function */
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
    <nav className="flex items-center justify-between font-medium p-4 z-40 w-full fixed mx-auto bg-blue-500">
      <Link to="/" className="">
        <img className="h-14" src={logo} alt="logo" />
      </Link>

      <div className="text-lg hidden md:flex ml-12 ">
        <Link
          to="/"
          className="block mt-4 md:inline-block   hover:text-gray-50  text-gray-50 md:mt-0 mr-10"
        >
          Inicio
        </Link>
        <Link
          to="/about"
          className="block mt-4 md:inline-block text-gray-50 md:mt-0 mr-10"
        >
          Nosotros
        </Link>
        <Link
          to="/socios"
          className="block mt-4 md:inline-block text-gray-50 md:mt-0 mr-10"
        >
          Asociados
        </Link>
        <Link
          to="/delegados"
          className="block mt-4 md:inline-block text-gray-50 md:mt-0 mr-10"
        >
          Delegados
        </Link>
        <button
          className="block md:inline-block mt-4  text-gray-50 md:mt-0 mr-10 outline-none focus:outline-none 
          ease-linear transition-all duration-150"
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          Servicios
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 block md:inline-block pl-1"
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
          to="/descargas"
          className="block mt-4 md:inline-block text-gray-50 md:mt-0 mr-10"
        >
          Descargas
        </Link>
        <Link
          to="/contacto"
          className="block mt-4 md:inline-block text-gray-50 md:mt-0 mr-10"
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
      </div>
    </nav>
  );
}

export default NavbarNew2;
