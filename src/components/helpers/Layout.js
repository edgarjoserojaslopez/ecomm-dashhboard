/* import React, { useEffect, useState } from "react"; */
/* import MenuMobile from "./MenuMobile"; */
import Navbar from "./Navbar";
import NavbarNew from "./NavbarNew";
/* import NavbarTim from "./NavbarTim"; */
function Layout({ children }) {
  return (
    <div className=" min-h-screen bg-layout-pattern">
      <NavbarNew />
      {/* {isOpen && <MenuMobile mobileOpen={toggleOpen} />} */}
      {children}
    </div>
  );
}

export default Layout;
