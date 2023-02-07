import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role: number) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default React.memo(RequireAuth);
