import { TOKEN, USER } from "pages/Login/constants";

const getUser = () => {
  const user = JSON.parse(localStorage.getItem(USER) as string);
  const accessToken = localStorage.getItem(TOKEN) ;
  return { user, accessToken };
};

export const useCurrentUser = () => {
  const state = getUser();
  return state;
};
