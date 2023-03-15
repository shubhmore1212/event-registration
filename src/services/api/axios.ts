import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000" });

export const GET = (url: string, payload?: any) =>
  instance
    .get(url, { headers: { Authorization: payload.accessToken } })
    .then((res) => res.data);

export const PUT = (url: string, payload: any) =>
  instance
    .put(url, payload, { headers: { Authorization: payload.accessToken } })
    .then((res) => res);

export const DELETE = (url: string, payload: any) =>
  instance
    .delete(url, { headers: { Authorization: payload.accessToken } })
    .then((res) => res.data);

export const POST = (url: string, body: any) =>
  instance
    .post(url, body, { headers: { Authorization: body.accessToken } })
    .then((res) => res);
