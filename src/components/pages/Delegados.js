import React, { useEffect } from "react";

/* -- Variables Nombres Junta directiva -- */
function createData(region, nombre, telefono) {
  return { region, nombre, telefono };
}

const rows = [
  createData("Aduana Marítima de la Guaira", "Janeth Vera", "(0416) 303.89.82"),
  createData(
    "Aduana Aérea de Maiquetía",
    "Gustavo Colmenares",
    "(0414) 232.43.98"
  ),
  createData(
    "Aduana Aérea de Maiquetía",
    "Vigee Torres (Suplente)",
    "(0414) 232.43.98"
  ),
  createData("Región Capital (Los Ruices)", "Lila Santos", "(0414) 260.09.85"),
  createData(
    "Región Capital (Los Ruices)",
    "Gladys Echenagucia (Suplente)",
    "(0212) 207.25.94"
  ),
  createData("Región Capital (Plaza Venezuela)", "", ""),
  createData("Región Capital (CE)", "Valentina Martínez", "(0414) 324.52.90"),
  createData(
    "Región Capital (CE)",
    "Irene Villamizar (Suplente)",
    "(0212) 709.20.08"
  ),
  createData("Mata de Coco", "Nelly Mendoza", "(0416)634.99.87"),
  createData("Mata de Coco", "Nelsón Ramos (Suplente)", "(0212) 709.48.01"),
  createData("Región Central", "Dora Guillen", "(0414) 482.41.79"),
  createData(
    "Puerto Cabello Aduana Marítima",
    "Ana Hilda Andara",
    "(0424) 499.09.81"
  ),
  createData("Sector Maracay", "Luz Marina Molina", "(0416) 643.16.38"),
  createData(
    "Sector Maracay",
    "Francis Camacho (Suplente)",
    "(0416) 615.80.58"
  ),
  createData("Región Los Llanos", "Carolina Perez", "(0246) 431.31.68"),
  createData(
    "Región Centro Occidental",
    "Tomas Valderrama",
    "(0412) 517.53.56"
  ),
  createData(
    "Región Zuliana (Tributos)",
    "Gigliola D´Adosio",
    "(0414) 668.13.55"
  ),
  createData(
    "Región Zuliana (Tributos)",
    "Maria Jose Bracho (Suplente)",
    "(0261) 796.24.32"
  ),
  createData("Región Zuliana (Aduana)", "Ramón Segovia", "(0416) 662.00.56"),
  createData(
    "Región Zuliana (Aduana)",
    "Feralia Toro (Suplente)",
    "(0261) 796.22.14"
  ),
  createData("Región Los Andes", "Mayra Santander", "(0414) 715.36.51"),
  createData(
    "Región Los Andes",
    "Willian Castillo (Suplente)",
    "(0414) 715.36.51"
  ),
  createData("Región Nororiental", "José Luis Prado", "(0416) 580.13.12"),
  createData(
    "Región Nororiental",
    "Diana Vargas (Suplente)",
    "(0424) 886.22.51"
  ),
  createData(
    "Región Guayana (Tributos)",
    "Guillermo Salazar",
    "(0426) 592.36.70"
  ),
  createData(
    "Región Guayana (Aduana)",
    "Marisela Fernandez",
    "(0416) 987.18.35"
  ),
  createData("Región Insular", "Mariela Álvarez", "(0416) 695.74.12"),
  createData("Región Insular", "Carlos Suarez (Suplente)", "(0414) 787.88.68"),
];

function Delegados() {
  useEffect(() => {
    document.title = "Delegados";
  }, []);
  return (
    <main className="flex  pt-12 md:pt-24 w-screen h-screen justify-start items-start ">
      <div className="p-4 mx-4 my-4">
        <p className="font-thin  pl-6 text-blue-600 text-3xl">
          Delegados Regionales
        </p>
        <section className="flex items-center mx-auto  ">
          <div className=" w-auto md:flex justify-center ">
            <div className="w-full md:w-3/5 md:pl-6  p-4 ">
              <p className="mb-2">
                Los Delegados son los representantes de los Asociados de CAPRES
                por cada región Administrativa, debidamente electos en Asamblea
                parcial de Asociados y acreditados ante el Consejo de
                Administración y de Vigilancia de la Asociación.
              </p>

              <div className="w-full ">
                <div className="px-4 md:px-5 py-4 md:py-7  bg-gray-100 rounded-lg ">
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
                        <th className="text-left pl-4">
                          Región Administrativa
                        </th>
                        <th className="text-left pl-12">Delegado(s)</th>
                        <th className="text-left pl-12">Teléfono</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {rows.map((row) => (
                        <tr
                          className="h-10  text-sm leading-none text-gray-800 bg-gray-100 border-b-2 border-gray-300"
                          key={row.nombre}
                        >
                          <td className="pl-4 cursor-pointer">{row.region}</td>
                          <td className="pl-12">{row.nombre}</td>
                          <td className="pl-12">{row.telefono}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Delegados;
