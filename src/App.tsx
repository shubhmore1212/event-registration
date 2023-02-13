import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import SignUp from "./pages/SignUp";
import LoginContainer from "./pages/Login";
import LandingContainer from "./pages/LandingPage";
import AdminContainer from "./pages/Admin/Dashboard";
import RegistrantContainer from "./pages/Registrant/Dashboard";
import OrganizerContainer from "./pages/Organizer/Dashboard";

import RequireAuth from "./RequireAuth";

import "./App.css";
import Error from "./pages/Error/Error";
import { ERROR } from "./constants";
import CreateEvent from "./pages/Organizer/CreateEvent";
import DisplayEvent from "./pages/Organizer/DisplayEvent";
import RegisterForm from "./pages/Registrant/RegisterEvent";
import UpdateEventForm from "./pages/Organizer/UpdateEvent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<LandingContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="display-event/:event_id" element={<DisplayEvent />} />

        {/* Error */}
        <Route path="error-400" element={<Error {...ERROR.error400Props} />} />
        <Route path="error-401" element={<Error {...ERROR.error401Props} />} />
        <Route path="error-422" element={<Error {...ERROR.error422Props} />} />
        <Route path="error-500" element={<Error {...ERROR.error500Props} />} />
        <Route path="error-404" element={<Error {...ERROR.error404Props} />} />

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={[3]} />}>
          <Route path="/admin" element={<AdminContainer />} />
        </Route>

        {/* organizer routes */}
        <Route element={<RequireAuth allowedRoles={[2]} />}>
          <Route path="/organizer" element={<OrganizerContainer />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="/update-form/:event_id" element={<UpdateEventForm />} />
        </Route>

        {/* registrant routes */}
        <Route element={<RequireAuth allowedRoles={[1]} />}>
          <Route path="/register" element={<RegistrantContainer />} />
          <Route path="/register-form/:event_id" element={<RegisterForm />} />
        </Route>

        {/* common routes allowed to all roles */}
        <Route element={<RequireAuth allowedRoles={[1, 2, 3]} />}>
          <Route path="display-event/:event_id" element={<DisplayEvent />} />
        </Route>

        <Route path="*" element={<Navigate to={"/error-404"} replace />} />
      </Route>
    </Routes>
  );
};

export default React.memo(App);
