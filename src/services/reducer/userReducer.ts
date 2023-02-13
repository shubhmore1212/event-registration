import { ACTIONS } from "./userActions";

const state = {
  accessToken: "",
  user: "",
  isLoading: true,
};

const user = localStorage.getItem("user");
const accessToken = localStorage.getItem("token");

const localStorageData = {
  user,
  accessToken,
};

export const initialState = {
  ...state,
  ...localStorageData,
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  const accessToken = localStorage.getItem("token");
  if (user !== null) {
    return { ...initialState, user: JSON.parse(user), accessToken };
  } else {
    return { ...initialState };
  }
};

export const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      console.log("reducer", { ...state, ...action.payload });
      return { ...state, ...action.payload, isLoading: false };
    case ACTIONS.GET_USER:
      return { ...state };
    default:
      return state;
  }
};
