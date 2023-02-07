import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import LoginContainer from "./pages/Login";
import LandingContainer from "./pages/LandingPage";
import AdminContainer from "./pages/Admin/Dashboard";
import RegistrantContainer from "./pages/Registrant/Dashboard";
import OrganizerContainer from "./pages/Organizer/Dashboard";

import RequireAuth from "./RequireAuth";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<LandingContainer />} />
        <Route path="login" element={<LoginContainer />} />

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={[3]} />}>
          <Route path="/admin" element={<AdminContainer />} />
        </Route>

        {/* organizer routes */}
        <Route element={<RequireAuth allowedRoles={[2]} />}>
          <Route path="/organizer" element={<OrganizerContainer />} />
        </Route>

        {/* registrant routes */}
        <Route element={<RequireAuth allowedRoles={[1]} />}>
          <Route path="/register" element={<RegistrantContainer />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
};

export default React.memo(App);
