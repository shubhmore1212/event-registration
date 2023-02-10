import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
});

const instance = axios.create({ baseURL: "http://localhost:3000" });

export const GET = (url: string, payload?: any, params?: any) => {
  return instance
    .get(url, { params, headers: { Authorization: payload.accessToken } })
    .then((res) => res.data);
};

export const PUT = async (url: string, payload: any) => {
  return await instance
    .put(url, payload, { headers: { Authorization: payload.accessToken } })
    .then((res) => res);
};

export const DELETE = (url: string) => {
  return instance.delete(url).then((res) => res.data);
};

export const POST = (url: string, body: any) => {
  return instance
    .post(url, body, { headers: { Authorization: body.accessToken } })
    .then((res) => res);
};
