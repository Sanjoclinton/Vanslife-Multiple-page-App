import { NavLink, Outlet, redirect, useNavigate } from "react-router-dom";
import { hostNav } from "../constants";
import { BiLogOut } from "react-icons/bi";
import { auth } from "../constants/api";
import { signOut } from "firebase/auth";


const HostLayout = () => {

  return (
    <>
      <div className="w-full container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <nav className="d-flex justify-space-between gap-3">
            {hostNav.map((navLink, index) => (
              <NavLink
                key={navLink.id}
                to={navLink.to}
                end={index === 0 && true}
                className={({ isActive }) => (isActive ? "active" : null)}
              >
                {navLink.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
