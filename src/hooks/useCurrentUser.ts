import { useReducer } from "react";
import { userReducer, getUser } from "../services/reducer/userReducer";

export const useCurrentUser = () => {
  const state = getUser();
  return state;
};
