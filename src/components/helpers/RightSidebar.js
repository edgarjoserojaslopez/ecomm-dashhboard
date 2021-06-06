import React from "react";
import { Link } from "react-router-dom";

function rightSidebar() {
  return (
    <div className="flex flex-col w-full justify-content-center md:ml-6 ">
      <div className="rounded bg-white flex-auto w-4/5 md:w-5/6   shadow mt-4  mb-6">
        {/* <!-- header --> */}
        <header className="p-4 bg-blue-600">
          <h3 className="text-3xl font-medium text-gray-50">Historia</h3>
        </header>
        {/* <!-- section --> */}
        <section className="p-4 bg-white text-blue-500  shadow-xl rounded font-semibold flex flex-col">
          <Link to="/about/historia">Historia de CAPRES</Link>
          <Link to="/about/junta">Junta Directiva</Link>
          <Link to="/about/organizacion">Organización Administrativa</Link>
          <Link to="/about/estatutos">Estatutos CAPRES</Link>
        </section>
      </div>
      <div className="rounded bg-white flex-auto w-4/5 md:w-5/6  shadow mt-4 mb-6">
        {/* <!-- header --> */}
        <header className="p-4 bg-blue-600">
          <h3 className="text-3xl font-medium text-gray-50">Marco Legal</h3>
        </header>
        {/* <!-- section --> */}
        <section className="p-4 bg-white text-blue-500  shadow-xl rounded font-semibold flex flex-col">
          <Link to="/historia">Ley Cajas de Ahorro</Link>
          <Link to="/junta">Estatutos CAPRES</Link>
        </section>
        {/* <!-- footer --> */}
      </div>
    </div>
  );
}

export default rightSidebar;
