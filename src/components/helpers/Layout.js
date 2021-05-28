import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-yellow-500 h-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
