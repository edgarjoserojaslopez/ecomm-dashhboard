import React, { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
/* import Navbar from "./Navbar"; */
import NavbarNew from "./NavbarNew";
import NavbarNew2 from "./NavbarNew2";
import pattern from "../../assets/images/squares.svg";

function Layout({ children }) {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setisOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <header className=" leading-normal tracking-normal">
      <NavbarNew />
      {/* {isOpen && <MenuMobile mobileOpen={toggleOpen} />} */}
      {children}
    </header>
  );
}

export default Layout;
