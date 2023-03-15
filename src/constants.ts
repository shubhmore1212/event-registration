import { lazy } from "react";

import LoginContainer from "./pages/Login";
import LandingContainer from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

import IMAGES from "./assets";

const AdminContainer=lazy(()=>import("./pages/Admin/Dashboard"))
const OrganizerContainer=lazy(()=>import("./pages/Organizer/Dashboard"))
const CreateEvent=lazy(()=>import("./pages/Organizer/CreateEvent"))
const UpdateEventForm=lazy(()=>import("./pages/Organizer/UpdateEvent"))
const DisplayEvent=lazy(()=>import("./pages/Organizer/DisplayEvent"))
const RegistrantContainer=lazy(()=>import("./pages/Registrant/Dashboard"))
const DisplayRegisteredEvents=lazy(()=>import("./pages/Registrant/DisplayRegisteredEvents"))

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  //Error
  ERROR_400: "/error-400",
  ERROR_401: "/error-401",
  ERROR_404: "/error-404",
  ERROR_422: "/error-422",
  ERROR_500: "/error-500",
  //Admin
  ADMIN: "/admin",
  //Organizer
  ORGANIZER: "/organizer",
  CREATE_EVENT: "/create-event",
  UPDATE_EVENT: "/update-form/:event_id",
  //Register
  REGISTERANT: "/register",
  REGISTERED_EVENT: "/registred-event",
  //All roles
  DISPLAY_EVENT: "/display-event/:event_id",
};

export const ERROR = {
  error400Props: {
    errorNumber: "400",
    errorDescription: "Something wrong with credentials!🤔",
    errorBody: "Missing Username and Password",
    errorImg: IMAGES.Error500,
  },
  error401Props: {
    errorNumber: "401",
    errorDescription: "You are not authorized! 🔐",
    errorBody: "You don't have permission to access this page. Go Home!",
    errorImg: IMAGES.Error401,
  },
  error404Props: {
    errorNumber: "404",
    errorDescription: "Page Not Found ⚠️",
    errorBody: "We couldn't find the page you are looking for.",
    errorImg: IMAGES.Error404,
  },
  error422Props: {
    errorNumber: "422",
    errorDescription: "Please input valid credential⚠️",
    errorBody: "For reference  use placeholder text format.",
    errorImg: IMAGES.Error404,
  },
  error500Props: {
    errorNumber: "500",
    errorDescription: "Internal server error 👨🏻‍💻",
    errorBody: "Oops, something went wrong!",
    errorImg: IMAGES.Error500,
  },
};

export const PUBLIC_ROUTES = [
  {
    path: ROUTES.HOME,
    component: LandingContainer,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginContainer,
  },
  {
    path: ROUTES.SIGNUP,
    component: SignUp,
  },
];

export const ADMIN_ROUTES = [
  {
    path: ROUTES.ADMIN,
    component: AdminContainer,
  },
];

export const ORGANIZER_ROUTES = [
  {
    path: ROUTES.ORGANIZER,
    component: OrganizerContainer,
  },
  {
    path: ROUTES.CREATE_EVENT,
    component: CreateEvent,
  },
  {
    path: ROUTES.UPDATE_EVENT,
    component: UpdateEventForm,
  },
];

export const REGISTRANT_ROUTES = [
  {
    path: ROUTES.REGISTERANT,
    component: RegistrantContainer,
  },
  {
    path: ROUTES.REGISTERED_EVENT,
    component: DisplayRegisteredEvents,
  },
];

export const ALL_ROLE_ROUTES = [
  {
    path: ROUTES.DISPLAY_EVENT,
    component: DisplayEvent,
  },
];
