import LoginContainer from "./pages/Login"
import SignUpPage from "./layouts/SignUp.page";
import LandingContainer from "./pages/LandingPage";

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
