import { ROUTES } from "../constants";

export const setLocalStorageUser = (user: any) => {
  return JSON.stringify(user);
};

export const handleNavigate = (roleId: number) => {
  switch (roleId) {
    case 1:
      return ROUTES.REGISTER;
    case 2:
      return ROUTES.ORGANIZER;
    case 3:
      return ROUTES.ADMIN;
    default:
      return ROUTES.HOME;
  }
};
