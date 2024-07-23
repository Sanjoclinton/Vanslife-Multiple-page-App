import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { hostNav } from "../constants";

const HostLayout = () => {
  return (
    <>
      <div className="w-full container py-4">
        <nav className="d-flex justify-space-between gap-3">
          {hostNav.map((navLink, index) => (
            <NavLink
              key={navLink.id}
              to={navLink.to}
              end={index === 0 && true}
              className={({ isActive }) => isActive ? 'active': null}
            >
              {navLink.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
