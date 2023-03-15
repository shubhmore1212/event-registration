import { useNavigate } from "react-router-dom";

import { ROUTES } from "../constants";

export const useErrorNavigation = () => {
  const navigate = useNavigate();

  const errorNavigation = (error: any) => {
    switch (error.response?.status) {
      case 400:
        navigate(ROUTES.ERROR_400, { replace: true });
        return;
      case 401:
        navigate(ROUTES.ERROR_401, { replace: true });
        return;
      case 422:
        navigate(ROUTES.ERROR_422, { replace: true });
        return;
      case 404:
        navigate(ROUTES.ERROR_404, { replace: true });
        return;
      default:
        navigate(ROUTES.ERROR_500, { replace: true });
        return;
    }
  };

  return errorNavigation;
};
