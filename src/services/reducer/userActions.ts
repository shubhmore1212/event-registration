export const ACTIONS = {
  GET_TOKEN: "GET_TOKEN",
  SET_USER: "SET_USER",
  GET_USER: "GET_USER",
};

export const getToken = () => ({
  type: ACTIONS.GET_TOKEN,
});

export const setUser = (payload:any) => {
  console.log("action",payload);
  
  return ({
  type: ACTIONS.SET_USER,
  payload
})};

export const getUser = () => ({
  type: ACTIONS.GET_USER,
});
