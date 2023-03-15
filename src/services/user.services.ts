import { DELETE, GET, POST, PUT } from "./api/axios";

export const addUser = (payload: any) => POST("/users", payload);

export const userLogin = (payload: any) => POST("/users/sign_in", payload);

export const createEvent = (payload: any) =>
  POST(`api/v1/users/${payload.id}/events`, payload);

export const registerEvent = (payload: any) =>
  POST(`api/v1/user_events`, payload);

export const getOrganizedEvent = (payload: any) =>
  GET(`api/v1/users/${payload.id}/events`, payload);

export const getAllEvent = (payload: any) => GET(`api/v1/events`, payload);

export const getAllRegistredEvent = (payload: any) =>
  GET(
    `api/v1/user_events/get_registered_events?user_id=${payload.id}`,
    payload
  );

export const getAllUser = (payload: any) => GET(`api/v1/users`, payload);

export const getAllCount = (payload: any) =>
  GET(`api/v1/users/count_data`, payload);

export const getByEventId = (payload: any) =>
  GET(`api/v1/events/${payload.id}`, payload);

export const updateEvent = (payload: any) =>
  PUT(`api/v1/events/${payload.id}`, payload);

export const deleteEvent = (payload: any) =>
  DELETE(`api/v1/events/${payload.id}`, payload);
