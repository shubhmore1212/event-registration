import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import {
  addUser,
  createEvent,
  deleteEvent,
  getAllEvent,
  getAllUser,
  getByEventId,
  getOrganizedEvent,
  registerEvent,
  updateEvent,
  userLogin,
} from "../services/user.services";
import {
  RQ_KEY_EVENT_BY_ID,
  RQ_KEY_GET_ALL_EVENT,
  RQ_KEY_GET_ALL_USER,
  RQ_KEY_ORGANIZED_EVENT,
  RQ_KEY_USER,
} from "./constants";

export const useAddUser = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(addUser, {
    onSuccess,
    onError,
  });
};

export const useUserLogin = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(userLogin, {
    onSuccess,
    onError,
  });
};

export const useCreateEvent = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(createEvent, {
    onSuccess,
    onError,
  });
};

export const useRegisterEvent = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(registerEvent, {
    onSuccess,
    onError,
  });
};

export const useUpdateEvent = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(updateEvent, {
    onSuccess,
    onError,
  });
};

export const useDeleteEvent = (props: any) => {
  const { onSuccess, onError } = props;
  return useMutation(deleteEvent, {
    onSuccess,
    onError,
  });
};

export const useGetOrganizedEvent = (props: any) => {
  const { onSuccess, onError, payload } = props;

  return useQuery<any, AxiosError>(
    [RQ_KEY_ORGANIZED_EVENT],
    () => getOrganizedEvent(payload),
    {
      onSuccess,
      onError,
    }
  );
};

export const useGetAllEvent = (props: any) => {
  const { onSuccess, onError, payload } = props;

  return useQuery<any, AxiosError>(
    [RQ_KEY_GET_ALL_EVENT],
    () => getAllEvent(payload),
    {
      onSuccess,
      onError,
    }
  );
};

export const useGetAllUsers = (props: any) => {
  const { onSuccess, onError, payload } = props;

  return useQuery<any, AxiosError>(
    [RQ_KEY_GET_ALL_USER],
    () => getAllUser(payload),
    {
      onSuccess,
      onError,
    }
  );
};

export const useGetEventById = (props: any) => {
  const { payload } = props;

  return useQuery<any, AxiosError>([RQ_KEY_EVENT_BY_ID], () =>
    getByEventId(payload)
  );
};
