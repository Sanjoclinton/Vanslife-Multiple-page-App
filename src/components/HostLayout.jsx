import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { hostNav } from "../constants";

const HostLayout = () => {
  return (
    <>
      <div className="w-full container pb-4">
        <div className="d-flex justify-space-between ">
          {hostNav.map((navLink, index) => (
            <NavLink
              key={navLink.id}
              to={navLink.to}
              end={index === 0 && true}
              className={({ isActive }) =>
                `text-dark  ${index !== hostNav.length - 1 && "me-3 me-md-5"}  ${!isActive && "text-decoration-none"} ${isActive && 'fw-bold'} `
              }
            >
              {navLink.title}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
