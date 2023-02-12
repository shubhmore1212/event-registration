import { getUser } from "../services/reducer/userReducer";

export const useCurrentUser = () => {
  const state = getUser();
  return state;
};
