import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import HeroImage from "../../assets/images/img6.jpg";

function Home() {
  return (
    <div className="h-full ">
      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}
      <div
        className="w-full  h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div className="flex flex-col  content-around mx-4 text-left text-white">
            <h1 className="font-bold text-6xl mb-4 uppercase">Capres</h1>
            <h2 className="font-bold text-3xl mb-5">Caja de Ahorros</h2>
            <p className="w-full sm:w-1/2 sm:text-justify text-left text-xl">
              La Caja de Ahorros de los Empleados del SENIAT{" "}
              <strong>(CAPRES)</strong> les da las más cordiales palabras de
              BIENVENIDA a nuestro nuevo portal, el cual tiene como misión
              fundamental mantener informados a nuestros Asociados en sus líneas
              maestras que son su razón de ser.
            </p>

            <div className="mt-6">
              <Link
                to="/register"
                className="bg-blue-500 rounded-md font-bold text-2xl text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2"
              >
                Crear una cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
