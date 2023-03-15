import React, { Suspense } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useCurrentUser } from "./hooks/useCurrentUser";
import Loader from "./shared/components/Loader";

const RequireAuth = ({ allowedRoles }: { allowedRoles: number[] }) => {
  const state = useCurrentUser();
  const location = useLocation();

  return [state?.user?.role_id].find((role: number) =>
    allowedRoles.includes(role)
  ) ? (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default React.memo(RequireAuth);
