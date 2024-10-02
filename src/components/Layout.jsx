import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";



const Layout = () => {
  
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <Nav />
        <div className="mb-auto">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
