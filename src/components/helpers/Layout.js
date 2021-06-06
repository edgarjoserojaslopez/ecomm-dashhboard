/* import React, { useEffect, useState } from "react"; */
/* import MenuMobile from "./MenuMobile"; */
import NavbarNew from "./NavbarNew";
/* import NavbarTim from "./NavbarTim"; */
function Layout({ children }) {
  return (
    <>
      <header className="mt-12 md:mt-20 h-screen bg-layout-pattern">
        <NavbarNew />

        {children}
      </header>
    </>
  );
}

export default Layout;
