import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "../../helpers/RightSidebar";

/* -- Variables Nombres Junta directiva -- */
function createData(cargo, nombre, suplente) {
  return { cargo, nombre, suplente };
}

const rows = [
  createData("Presidente", "Eloy Noriega", "Víctor Ojeda"),
  createData("Tesorero", "María Elena Barrios", "Miguel Maneiro"),
  createData("Secretario", "Alí León", "Raul Lucena"),
];

const rowsSec = [
  createData("Presidente", "Dora Castillo", "Luis Vidal"),
  createData("Tesorero", "Nestor Mendoza", "Daysi Seijas"),
  createData("Secretario", "Josefina Casteleiro", "Julio Terán"),
];

function Historia() {
  useEffect(() => {
    document.title = "Junta Directiva";
  }, []);
  return (
    <main className="flex  pt-12 md:pt-24 w-screen h-screen justify-center items-start ">
      <div className="p-4 mx-4 my-4">
        <p className="font-thin  pl-6 text-blue-600 text-3xl">
          Junta Directiva CAPRES
        </p>

        <section className="flex items-center mx-auto  ">
          <div className=" w-screen md:flex ">
            <div className="w-full md:w-3/5 md:pl-6  p-4 ">
              <p className="mb-2">
                El día 22 de Junio de 1995, 53 funcionarios adscritos al
                Servicio Nacional Integrado de Administración Tributaria
                (SENIAT) se reunieron a objeto de constituir lo que es hoy “La
                Caja de Ahorro y Previsión de los Empleados del Servicio
                Nacional Integrado de Administración Aduanera y Tributaria
                SENIAT – CAPRES”; teniendo por objeto principal establecer y
                fomentar el ahorro sistemático y en general procurar para sus
                asociados toda clase de beneficios socioeconómicos.
              </p>
              <p className="mb-6">
                La primera Junta Directiva estuvo conformada por:
              </p>
              <div className="w-full ">
                <div className="px-4 md:px-5 py-4 md:py-7 bg-gray-100 rounded-lg ">
                  <div className="sm:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-gray-800">
                      Consejo de Administración
                    </p>
                  </div>
                </div>
                <div className=" py-6 w-full ">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="h-16 w-max  text-lg leading-none text-gray-800 bg-gray-100 border-b-2 border-gray-300">
                        <th className="text-left pl-4">Nombre</th>
                        <th className="text-left pl-12">Cargo</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {rows.map((row) => (
                        <tr
                          className="h-10  text-sm leading-none text-gray-800 bg-gray-100 border-b-2 border-gray-300"
                          key={row.nombre}
                        >
                          <td className="pl-4 cursor-pointer">{row.nombre}</td>
                          <td className="pl-12">{row.cargo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full ">
                <div className="px-4 md:px-5 py-4 md:py-7 bg-gray-100 rounded-lg ">
                  <div className="sm:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-gray-800">
                      Consejo de Vigilancia
                    </p>
                  </div>
                </div>
                <div className=" py-6 w-full ">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="h-16 w-max  text-lg leading-none text-gray-800 bg-gray-100 border-b-2 border-gray-300">
                        <th className="text-left pl-4">Nombre</th>
                        <th className="text-left pl-12">Cargo</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {rowsSec.map((row) => (
                        <tr
                          className="h-10  text-sm leading-none text-gray-800 bg-gray-100 border-b-2 border-gray-300"
                          key={row.nombre}
                        >
                          <td className="pl-4 cursor-pointer">{row.nombre}</td>
                          <td className="pl-12">{row.cargo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 md:pl-6  p-8 ml-8 ">
              <RightSidebar />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Historia;
