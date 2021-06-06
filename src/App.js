import { Switch, Route } from "react-router-dom";
import React from "react";

import Layout from "./components/helpers/LayoutCopy";
import About from "./components/pages/Nosotros/About";
import Contacto from "./components/pages/Contacto";
import Delegados from "./components/pages/Delegados";
import Descargas from "./components/pages/Descargas";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Servicios from "./components/pages/Servicios/Servicios";
import Socios from "./components/pages/Socios";
import "./index.css";
import Historia from "./components/pages/Nosotros/Historia";
import Organizacion from "./components/pages/Nosotros/Organizacion";
import Junta from "./components/pages/Nosotros/Junta";
import RetirosHaberes from "./components/pages/Servicios/RetirosHaberes";
import PrestamosVehiculo from "./components/pages/Servicios/PrestamosVehiculo";
import PrestamosVivienda from "./components/pages/Servicios/PrestamosVivienda";
import PrestamosPersonales from "./components/pages/Servicios/PrestamosPersonales";
import FondoEspecial from "./components/pages/Servicios/FondoEspecial";
import DemoHeadless from "./components/pages/DemoHeadless";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/junta">
            <Junta />
          </Route>
          <Route path="/about/historia">
            <Historia />
          </Route>
          <Route path="/about/organizacion">
            <Organizacion />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/socios">
            <Socios />
          </Route>
          <Route path="/delegados">
            <Delegados />
          </Route>
          <Route path="/servicios/fondo">
            <FondoEspecial />
          </Route>
          <Route path="/servicios/vehiculos">
            <PrestamosVehiculo />
          </Route>
          <Route path="/servicios/vivienda">
            <PrestamosVivienda />
          </Route>
          <Route path="/servicios/personal">
            <PrestamosPersonales />
          </Route>
          <Route path="/servicios/haberes">
            <RetirosHaberes />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/descargas">
            <Descargas />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/fondo">
            <Register />
          </Route>
          <Route path="/demo">
            <DemoHeadless />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
