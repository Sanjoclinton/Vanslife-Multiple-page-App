import { NavLink } from "react-router-dom";
import { homeNav } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="d-flex align-items -center justify-content-center">
        <nav className="w-full d-flex container align-items-center">
          <NavLink id="logo" className="text-decoration-none" to="/">
            VANLIFE
          </NavLink>
          <div className="d-flex flex-grow-1 justify-content-end gap-3 gap-md-5">
            {homeNav.map((navLink) => (
              <NavLink
                to={navLink.to}
                key={navLink.id}
                className={({
                  isActive
                }) => isActive ? "active": ''}
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
