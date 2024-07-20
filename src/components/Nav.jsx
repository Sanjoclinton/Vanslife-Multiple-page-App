import { NavLink } from "react-router-dom";
import { homeNav } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="bg-prim">
        <nav className="d-flex container py-4 align-items-center">
          <NavLink id="logo" className="fw-bold fs-3 text-dark text-decoration-none" to="/">
            #VANLIFE
          </NavLink>
          <div className="d-flex flex-grow-1 justify-content-end ">
            {homeNav.map((navLink, index) => (
              <NavLink
                to={navLink.to}
                key={navLink.id}
                className={({
                  isActive
                }) => `text-dark fw-bold ${
                  index !== homeNav.length - 1 && "me-3 me-md-5"
                }
                 ${!isActive && "text-decoration-none"}`}
              >
                {navLink.title}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
