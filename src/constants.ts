import LoginContainer from "./pages/Login";
import SignUpPage from "./layouts/SignUp.page";
import LandingContainer from "./pages/LandingPage";
import IMAGES from "./assets";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
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
    path: ROUTES.HOME,
    component: SignUpPage,
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
