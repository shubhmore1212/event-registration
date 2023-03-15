import { ROUTES } from "../constants";

export const stringifyData = (user: any) => {
  return JSON.stringify(user);
};

export const handleNavigate = (roleId: number) => {
  switch (roleId) {
    case 1:
      return ROUTES.REGISTERANT;
    case 2:
      return ROUTES.ORGANIZER;
    case 3:
      return ROUTES.ADMIN;
    default:
      return ROUTES.HOME;
  }
};
