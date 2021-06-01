import React, { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
/* import Navbar from "./Navbar"; */
import NavbarNew from "./NavbarNew";

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
    <div className=" h-screen font-sans leading-normal tracking-normal bg-layout-pattern">
      <NavbarNew />
      {/* {isOpen && <MenuMobile mobileOpen={toggleOpen} />} */}
      {children}
    </div>
  );
}

export default Layout;
