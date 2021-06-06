import React, { useEffect } from "react";

function RetirosHaberes() {
  useEffect(() => {
    document.title = "Retiro de Haberes";
  }, []);
  return (
    <main className="flex flex-col pt-12 md:pt-24  h-auto  ">
      <div className="flex mt-2 flex-col w-3/4 justify-center p-8 mx-auto my-4 bg-gray-50 border-gray-200 shadow-lg">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">
          Retiro de Haberes
        </p>
        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 ">
              <p className="mb-2">
                Los asociados podrán solicitar el retiro de haberes bien sea
                Parcial o Total
              </p>
              <h4 className="mb-2 mt-3 font-bold">Retiro Parcial:</h4>
              <p className="mb-2">
                El asociado que tenga mas de seis (06) meses de antigüedad en la
                asociación puede solicitar su retiro parcial, cuyo monto maximo
                será igual al 80% de los haberes una vez deducido el saldo de
                préstamos pendientes y las fianzas que mantenga el asociado con
                CAPRES.
              </p>
              <h4 className="mb-2 mt-3 font-bold">
                Requisitos para solicitar el Retiro Parcial:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Solicitud de retiro de haberes debidamente llenada y firmada.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de la cedula de identidad.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia del recibo de pago (Reciente) de la 2da. Quincena.
                </li>
              </ul>
              <p className="mb-2">
                En caso de tener solicitud de préstamo especial, y optará por
                cancelar con sus haberes, los gastos administrativos y/o inicial
                deberá señalarlo en la solicitud.
              </p>
              <h4 className="mt-3 mb-2 font-bold">Retiro Total:</h4>
              <p className="mb-2">
                El retiro total de los haberes sólo se permitirá cuando se
                pierda legalmente la condición de asociado o por retiro
                voluntario, en cuyo caso, se le entregará al asociado la
                cantidad líquida que tenga en su haber deducidas las cantidades
                que adeudare por concepto de préstamos y demás obligaciones
                contraídas con CAPRES. En caso de muerte del asociado, la
                entrega de haberes se realizará a los herederos correspondientes
                o a quienes hayan sido previamente designados por el asociado
                como beneficiarios.
              </p>
              <p className="mb-2">
                La Asociación tiene un plazo no mayor de tres (3) mes para
                liquidar las cuentas de los asociados retirados. En caso de
                retiros colectivos, dicho plazo podrá extenderse hasta tres (3)
                meses, en la medida en que CAPRES disponga de los fondos
                suficientes para atender dichos retiros; salvo casos de fuerza
                mayor no imputable a CAPRES quedará extendido dicho plazo.
              </p>
              <p className="mb-2">
                Los haberes de los ex-asociados deberán ser retirados en un
                lapso no mayor de un (1) año, contado a partir de la fecha
                efectiva del retiro. Transcurrido ese lapso, se considerarán
                ingresos extraordinarios perdiendo el asociado todo derecho de
                reclamo por éste concepto.
              </p>
              <h4 className="mt-3 mb-2 font-bold">
                Requisitos para solicitar Retiro Total:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Solicitud de Retiro Total debidamente llenada y firmada.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de la cédula de identidad.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de recibo de pago.
                </li>
              </ul>
              <h4 className="mt-3 mb-2 font-bold">
                En caso de Fallecimiento del Asociado, se deberá anexar a su
                solicitud:
              </h4>
              <li className="list-disc list-inside">
                Declaración de herederos universales Autorización del tribunal
                para la emisión del cheque en caso de beneficiarios menores de
                edad.
              </li>
              <h4 className="mt-3 mb-2 font-bold">
                En caso de Herederos menores de edad, deberá anexarse a su
                solicitud:
              </h4>
              <li>
                Copia de la partida de nacimiento de cada uno de los Herederos.
              </li>
              <h4 className="mt-3 mb-2 font-bold">
                En caso de cónyuge, deberá anexarse a su solicitud:
              </h4>
              <li>Copia del Acta de Matrimonio.</li>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RetirosHaberes;
