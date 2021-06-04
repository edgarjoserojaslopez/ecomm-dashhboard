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
import Servicios from "./components/pages/Servicios";
import Socios from "./components/pages/Socios";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
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
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
