import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";

import { ROUTES, PUBLIC_ROUTES } from "./constants";
import App from "./App";

const RouteComponent = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* {PUBLIC_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} /> */}
          <Route path="/*" element={<App/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default React.memo(RouteComponent);
