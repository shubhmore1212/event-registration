import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "./context/AuthProvider";

const RouteComponent = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default React.memo(RouteComponent);
