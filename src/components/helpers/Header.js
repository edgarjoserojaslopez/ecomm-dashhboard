import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
/* import logo from "../../assets/images/capres.jpg"; */
import logo from "../../assets/images/capres.jpg";
function Header() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row">
        <div className="bg-yellow-600 max-w-full md:w-1/5 text-center">
          <img className="p-1 w-20 h-20" src={logo} alt="logo" />
        </div>
        <div className="bg-green-500 max-w-full md:w-3/5 flex md:flex-row md:space-x-10 md:align-middle md:content-center md:justify-center flex-col">
          <Link to="/">Inicio</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/updateproduct">Update Product</Link>
        </div>
        <div className="bg-blue-500 max-w-full md:w-1/5">Login-Logout</div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
