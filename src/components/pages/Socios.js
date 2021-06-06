import React, { useEffect } from "react";

function Socios() {
  useEffect(() => {
    document.title = "Asociados";
  }, []);
  return (
    <main className="flex pt-12 md:pt-24 w-screen h-screen justify-start items-start ">
      <div className="p-4 mx-4 my-4 ">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">Asociados</p>

        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 text-gray-800 ">
              {/* -- Hero section -- */}
              <p className="font-semibold">
                Quienes pueden ser asociados de CAPRES?
              </p>
              <ul className="px-4 mt-2">
                <li className="list-alpha px-2 mt-2">
                  Los trabajadores del SENIAT a tiempo indeterminado, una vez
                  que hayan prestado sus servicios por un período mínimo de un
                  (1) mes.
                </li>
                <li className="list-alpha px-2 mt-2">
                  holaLos trabajadores contratados cuando el contrato de trabajo
                  sea por un período superior a tres (3) meses.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Los trabajadores de la Caja de Ahorro, una vez culminado su
                  periodo de prueba y elaborado el contrato respectivo.
                </li>
                <li className="list-alpha px-2 mt-2">
                  El personal jubilado o pensionado del SENIAT.
                </li>
                <li className="list-alpha px-2 mt-2">
                  El personal en comisión de servicios en aquellos beneficios
                  que no estén cubiertos por el organismo al cual pertenecen.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Ex-trabajadores del SENIAT.
                </li>
              </ul>
            </div>
            <div className="w-full  md:pl-6  p-8 text-gray-800 ">
              {/* -- Hero section -- */}
              <p className="font-semibold">
                Requisitos para solicitar la afiliación a CAPRES:
              </p>
              <ul className="px-4 mt-2">
                <li className="list-alpha px-2 mt-2">
                  Solicitud debidamente llenada y firmada.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Fotocopia de la cedula de identidad.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Fotocopia de la cedula de identidad de los beneficiarios o
                  fotocopia de la partida de nacimiento en caso de que los
                  beneficiarios sean menores de edad.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Fotocopia del recibo de pago Reciente (2da. Quincena).
                </li>
                <li className="list-alpha px-2 mt-2">
                  Constancia de retiro en caso de haber sido afiliado a otra
                  Caja de Ahorros.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 text-gray-800 ">
              {/* -- Hero section -- */}
              <p className="font-semibold">
                Cuando se pierde la condición de asociado a CAPRES?
              </p>
              <ul className="px-4 mt-2">
                <li className="list-alpha px-2 mt-2">
                  Al Dejar de pertenecer al personal del SENIAT, como personal
                  propio o en comisión de servicio fuera de la institución por
                  un período mayor a lo establecido en la ley exceptuándose
                  aquellos que estén en comisión de servicios en CAPRES.
                </li>
                <li className="list-alpha px-2 mt-2">
                  Dejar de pertenecer al personal de CAPRES.
                </li>
                <li className="list-alpha px-2 mt-2">Retiro Voluntario.</li>
                <li className="list-alpha px-2 mt-2">Muerte.</li>
                <li className="list-alpha px-2 mt-2">
                  Exclusión, por las causas previstas en la Ley de Cajas de
                  Ahorro, Fondos de Ahorro y Asociaciones de Ahorro Similares,
                  siempre que se haya cumplido el procedimiento disiplinario,
                  respetando el derecho a la defensa y derecho al debido
                  proceso.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Socios;
