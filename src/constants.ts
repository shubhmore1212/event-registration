import LoginContainer from "./pages/Login";
import LandingContainer from "./pages/LandingPage";
import IMAGES from "./assets";
import SignUp from "./pages/SignUp";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  //Error
  ERROR_400: "/error-404",
  ERROR_401: "/error-401",
  ERROR_404: "/error-404",
  ERROR_422: "/error-422",
  ERROR_500: "/error-500",
  //Admin
  ADMIN: "/admin",
  //Organizer
  ORGANIZER: "/organizer",
  CREATE_EVENT:"/create-event",
  //Register
  REGISTER: "/register",
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
