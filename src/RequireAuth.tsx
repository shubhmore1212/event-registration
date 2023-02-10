import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "./hooks/useCurrentUser";


const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
  const state=useCurrentUser();
  const location = useLocation();

  return [state?.user?.role_id].find((role: number) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default React.memo(RequireAuth);
