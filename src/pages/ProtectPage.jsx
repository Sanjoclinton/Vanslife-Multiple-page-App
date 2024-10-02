import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UseAuthContext } from "../contexts/AuthContext";

export function ProtectPages() {
  const { user, loading } = UseAuthContext();
  const pathname = useLocation().pathname;


  return loading ? (
    null
  ) : !user ? (
    <Navigate
      to={`/login?message=You must first log in&redirectTo=${pathname}`}
    />
  ) : (
    <Outlet />
  );
}
