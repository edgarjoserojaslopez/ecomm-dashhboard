import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer mas";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
  }
  useEffect(() => {
    document.title = "Acerca de";
  }, []);
  return (
    <main className="flex  pt-12 md:pt-24 w-screen h-screen justify-center items-start ">
      <div className="p-4 mx-4 my-4">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">Nosotros</p>

        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full md:w-3/5 md:pl-6  p-8 ">
              {/* -- Hero section -- */}
              <h4 className="mb-3 font-bold">Capres</h4>
              <p className="mb-2">
                La Caja de Ahorro y previsión de los Empleados del SENIAT
                (CAPRES) es una asociación civil sin fines de lucro, con
                personalidad jurídica y patrimonio propio. Su función principal
                es la de fomentar el ahorro, garantizando a sus asociados la
                satisfacción de necesidades de índole económica y social.
              </p>
              <p className="mb-2">
                Constituida según documento inscrito en la Oficina de Registro
                Inmobiliario del Primer Circuito del Municipio Sucre del Estado
                Miranda, en fecha 21 de agosto de 1995, bajo el N° 41, Tomo 23
                del Protocolo Primero, registrada ante la Superintendencia de
                Cajas de Ahorro del Ministerio de Finanzas bajo el N° 553,
                Sector Público.
              </p>
              <h4 className="mb-3 font-bold">Misión</h4>
              <p className="mb-2">
                Satisfacer las necesidades socio económicas, recreacionales de
                esparcimiento y demandas en general de todos los Asociados a
                través de políticas acorde con sus necesidades y el
                establecimiento de una relación transparente, confiable,
                eficiente que garantice una adecuada administración de sus
                ahorros y dedicada a satisfacer plenamente las demandas
                financieras de los asociados bajo exigentes patrones de ética y
                responsabilidad.
              </p>
              <h4 className="mb-3 font-bold">Visión</h4>
              <p className="mb-2">
                Consolidar de manera progresiva los beneficios y planes a favor
                de los asociados, mediante una administración honesta y
                comprometida con los intereses colectivos de los asociados
                coadyuvando en el mejoramiento e incremento del nivel de vida de
                los socios.<span id="dots">..</span>
              </p>
              <div className="mb-2" id="more" style={{ display: "none" }}>
                {/* <div className="mb-2" id="more" style={{ display: "none" }}> */}
                <h4 className="mb-3 font-bold">Objeto</h4>

                <ul className=" list-disc list-inside">
                  <li className="text-justify">
                    Fomentar el ahorro sistemático y estimular hábitos de
                    economía y previsión social entre sus asociados.
                  </li>
                  <li>
                    Conceder préstamos en dinero en efectivo, en beneficio
                    exclusivo de sus asociados, a un interés preferencial y con
                    facilidades de pago
                  </li>
                  <li>
                    Procurar para sus asociados otros beneficios socioeconómicos
                    tales como la ayuda mutua, el montepío, la extensión de
                    póliza.
                  </li>
                  <li>
                    Procurar el financiamiento para la adquisición, remodelación
                    o liberación de viviendas.
                  </li>
                  <li>
                    Procurar el financiamiento para la adquisición de vehículos,
                    a tal fin podrá celebrar contratos con las empresas
                    fabricantes o comercializadoras del ramo específico.
                  </li>
                </ul>
                <p className="mb-2">
                  La Asociación está dirigida y administrada por un Consejo de
                  Administración, siendo su órgano contralor el Consejo de
                  Vigilancia, a quien compete la responsabilidad de velar porque
                  se cumpla toda la normativa legal relacionada con las
                  actividades de la Asociación.
                </p>
                <p className="mb-2">
                  Las Asambleas Parciales de Asociados son la máxima autoridad
                  de la Asociación y sus acuerdos y resoluciones obligan a todos
                  los asociados, siempre y cuando se tomen de conformidad con
                  los Estatutos de la Asociación y la Ley de Cajas de Ahorro,
                  Fondos de Ahorro y Asociaciones de Ahorro Similares.
                </p>
                <p className="mb-2">
                  Las Asambleas Parciales de Asociados, por regiones
                  administrativas, garantizan la participación directa de los
                  afiliados en la Asamblea General de Delegados. Deberán
                  reunirse ordinariamente una vez al año previamente a la
                  Asamblea General de Delegados, y extraordinariamente cuando
                  las circunstancias así lo requieran. Sus decisiones vinculan
                  al delegado ante la Asamblea General.
                </p>
                <div className="mb-2">
                  <h4 className="mb-3 font-bold">
                    Los beneficios más importantes que CAPRES brinda a sus
                    afiliados son:
                  </h4>
                  <ul className=" list-disc list-inside">
                    <li>Préstamos a Corto Plazo al 8 % de interés.</li>
                    <li>Préstamos a Mediano Plazo al 10 % de interés.</li>
                    <li>Préstamos a Largo Plazo al 12 % de interés.</li>
                    <li>
                      Préstamos con cargo al Fondo Especial para Programas al 14
                      % de interés.
                    </li>
                    <li>
                      Programas para la Adquisición, Remodelación de Vivienda
                      Principal.
                    </li>
                    <li>
                      Programas para la Liberación de Hipoteca de Vivienda
                      Principal.
                    </li>
                    <li>
                      Programas para la Adquisición de Vehículos, nuevos y
                      usados, para uso particular.
                    </li>
                    <li>Programas para el Rescate de Crédito Vehicular.</li>
                    <li>
                      Fondo de Ayuda Mutua, para asistir al afiliado en
                      programas de salud, y Fondo de Montepío para asistir al
                      afiliado por fallecimiento de sus descendientes y
                      ascendientes.
                    </li>
                  </ul>
                </div>
                <div className="mb-2">
                  <h4 className="mb-3 font-bold">
                    El funcionamiento y administración de CAPRES se regirá por:
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>
                      La Ley de Cajas de Ahorro, Fondos de Ahorro y Asociaciones
                      de Ahorro Similares y su reglamento.
                    </li>
                    <li>
                      Los Estatutos y Reglamentos internos de la Asociación.
                    </li>
                    <li>
                      Las decisiones de la Asambleas Parciales de Asociados y
                      General de Delegados, de los Consejos de Administración y
                      de Vigilancia.
                    </li>
                    <li>
                      Las resoluciones, opiniones y dictámenes de la
                      Superintendencia de Cajas de Ahorro.
                    </li>
                  </ul>
                </div>
                <div className="mb-">
                  <h4 className="mb-3 font-bold">
                    Los órganos administrativos y de control de CAPRES son:
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>La Asamblea de Delegados.</li>
                    <li>Las Asambleas Parciales de Asociados.</li>
                    <li>El Consejo de Administración.</li>
                    <li>El Consejo de Vigilancia</li>
                    <li>
                      Las Comisiones y los Comités que señale el Reglamento de
                      la Ley de Cajas de Ahorro, Fondos de Ahorro y Asociaciones
                      de Ahorro Similares
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button
                  className=" inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                  id="myBtn"
                  onClick={myFunction}
                >
                  leer más
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 md:pl-6  p-8 ml-8 ">
              <div className="rounded bg-white shadow max-w-md mx-auto mb-6">
                {/* <!-- header --> */}
                <header className="p-4 bg-blue-600">
                  <h3 className="text-3xl font-medium text-gray-50">
                    Historia
                  </h3>
                </header>
                {/* <!-- section --> */}
                <section className="p-4 bg-white text-blue-500  shadow-xl rounded font-semibold flex flex-col">
                  <Link to="/historia">Historia de CAPRES</Link>
                  <Link to="/junta">Junta Directiva</Link>
                  <Link to="/organizacion">Organización Administrativa</Link>
                  <Link to="/estatutos">Estatutos CAPRES</Link>
                </section>
              </div>
              <div className="rounded bg-white shadow max-w-md mx-auto">
                {/* <!-- header --> */}
                <header className="p-4 bg-blue-600">
                  <h3 className="text-3xl font-medium text-gray-50">
                    Marco Legal
                  </h3>
                </header>
                {/* <!-- section --> */}
                <section className="p-4 bg-white text-blue-500  shadow-xl rounded font-semibold flex flex-col">
                  <Link to="/historia">Ley Cajas de Ahorro</Link>
                  <Link to="/junta">Estatutos CAPRES</Link>
                </section>
                {/* <!-- footer --> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
