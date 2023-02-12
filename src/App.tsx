import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import AdminContainer from "./pages/Admin/Dashboard";
import CreateEvent from "./pages/Organizer/CreateEvent";
import DisplayEvent from "./pages/Organizer/DisplayEvent";
import UpdateEventForm from "./pages/Organizer/UpdateEvent";
import OrganizerContainer from "./pages/Organizer/Dashboard";
import RegistrantContainer from "./pages/Registrant/Dashboard";
import Error from "./pages/Error/Error";

import { ERROR, PUBLIC_ROUTES, ROUTES } from "./constants";

import "./App.css";
import MouseOverPopover from "./shared/components/MouseOverPopover";
import DisplayRegisteredEvents from "./pages/Registrant/DisplayRegisteredEvents";

interface RouteProps {
  path: string;
  component: React.MemoExoticComponent<() => JSX.Element>;
}

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        {/* public routes */}
        {PUBLIC_ROUTES.map((route: RouteProps) => (
          <Route path={route.path} element={<route.component />} />
        ))}
        <Route path="/mouse" element={<MouseOverPopover />} />

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
          <Route
            path="/registred-event"
            element={<DisplayRegisteredEvents />}
          />
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
