import { NavLink, useNavigate } from "react-router-dom";
import { homeNav } from "../constants";
import { TbUserCircle } from "react-icons/tb";
import { UseAuthContext } from "../contexts/AuthContext";
import { BiLogOut } from "react-icons/bi";

import { signOut } from "firebase/auth";
import { auth } from "../constants/api";

const Nav = () => {
  const navigate = useNavigate();
  const { user, loading } = UseAuthContext();

  const logOut = async () => {
    try {
      await signOut(auth);
      return navigate("./login");
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <>
      <header className="d-flex align-items-center justify-content-center">
        <nav className="w-full d-flex container align-items-center">
          <NavLink id="logo" className="text-decoration-none" to="/">
            #VANLIFE
          </NavLink>
          <div className=" flex-grow-1  d-flex align-items-center justify-content-end gap-3 gap-md-5">
            <div className="d-flex gap-3 gap-md-5">
              {homeNav.map((navLink) => (
                <NavLink
                  to={navLink.to}
                  key={navLink.id}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {navLink.title}
                </NavLink>
              ))}
            </div>
            {loading ? null : !user ? (
              <NavLink
                to="login"
                className="d-flex align-items-center justify-content-center"
              >
                <TbUserCircle size={20} />
              </NavLink>
            ) : (
              <button className="bg-transparent border-0">
                <BiLogOut size={22} onClick={logOut} />
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
