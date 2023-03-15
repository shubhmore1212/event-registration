import React, { lazy} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RequireAuth from "./RequireAuth";

import {
  ADMIN_ROUTES,
  ALL_ROLE_ROUTES,
  ERROR,
  ORGANIZER_ROUTES,
  PUBLIC_ROUTES,
  REGISTRANT_ROUTES,
  ROUTES,
} from "./constants";

import "./App.css";

interface RouteProps {
  path: string;
  component:
    | React.MemoExoticComponent<() => JSX.Element>
    | React.LazyExoticComponent<React.ComponentType<any>>;
}

const Error = lazy(() => import("./pages/Error/Error"));



const App = () => {
  return (
    <Routes>
      <Route>
        {/* public routes */}
        {PUBLIC_ROUTES.map((route: RouteProps) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={[3]} />}>
          {ADMIN_ROUTES.map((route: RouteProps) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        {/* organizer routes */}
        <Route element={<RequireAuth allowedRoles={[2]} />}>
          {ORGANIZER_ROUTES.map((route: RouteProps) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        {/* registrant routes */}
        <Route element={<RequireAuth allowedRoles={[1]} />}>
          {REGISTRANT_ROUTES.map((route: RouteProps) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        {/* common routes allowed to all roles */}
        <Route element={<RequireAuth allowedRoles={[1, 2, 3]} />}>
          {ALL_ROLE_ROUTES.map((route: RouteProps) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>

        {/* Error */}
        <Route
          path={ROUTES.ERROR_400}
          element={<Error {...ERROR.error400Props} />}
        />
        <Route
          path={ROUTES.ERROR_401}
          element={<Error {...ERROR.error401Props} />}
        />
        <Route
          path={ROUTES.ERROR_422}
          element={<Error {...ERROR.error422Props} />}
        />
        <Route
          path={ROUTES.ERROR_500}
          element={<Error {...ERROR.error500Props} />}
        />
        <Route
          path={ROUTES.ERROR_404}
          element={<Error {...ERROR.error404Props} />}
        />

        <Route path="*" element={<Navigate to={ROUTES.ERROR_404} replace />} />
      </Route>
    </Routes>
  );
};

export default React.memo(App);
