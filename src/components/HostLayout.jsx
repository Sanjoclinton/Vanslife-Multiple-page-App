import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { hostNav } from "../constants";
import { BiLogOut } from "react-icons/bi";

const HostLayout = () => {
  const navigate = useNavigate();

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
          <button
            className="bg-transparent border-0"
            onClick={() => {
              localStorage.removeItem("loggedIn");
              navigate("/login");
            }}
          >
            <BiLogOut size={22} />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
