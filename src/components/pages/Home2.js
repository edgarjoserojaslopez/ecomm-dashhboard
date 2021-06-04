import React from "react";
import HeroImage from "../../assets/images/img6.jpg";
function Home() {
  return (
    <div
      className="w-full  h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <main>
        <section className="container flex items-center mx-auto px-6">
          <div className="w-full md:flex items-center">
            <div className="w-full md:w-1/2">
              <h2 class="text-xl md:text-3xl text-gray-600">Bienvenidos a</h2>

              <h1 class="text-6xl md:text-7xl uppercase font-bold text-teal-600 mb-2 md:mb-6">
                capres
              </h1>
              <p className="text-md md:text-xl font-light text-gray-800 mb-8">
                La Caja de Ahorros de los Empleados del SENIAT{" "}
                <strong>(CAPRES)</strong> les da las más cordiales palabras de
                BIENVENIDA a nuestro nuevo portal, el cual tiene como misión
                fundamental mantener informados a nuestros Asociados en sus
                líneas maestras que son su razón de ser.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-24">
              <form action="#" class="bg-gray-100 shadow-sm rounded-md p-8">
                <div class="mb-6">
                  <label for="name" class="mb-3 block text-gray-700">
                    Nombre completo:
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label for="email" class="mb-3 block text-gray-700">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div class="mb-8">
                  <label for="company_size" class="mb-3 block text-gray-700">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
                    placeholder="Ingresar contraseña"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="py-3 px-12 bg-teal-500 uppercase hover:bg-teal-600 mr-5 rounded-md text-white text-lg focus:outline-none w-full"
                >
                  login
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
