import axios, { AxiosRequestConfig } from "axios";

import { Route, ApiData } from "./types";

const instance = axios.create({ baseURL: "/api" });

export const api = async <R extends Route>(
  route: R,
  payload?: any,
  query?: any
): Promise<any> => {
  const { method, getUrl } = route;
  let config: AxiosRequestConfig = { method, url: getUrl(query) };

  if (payload) {
    config = { ...config, data: payload };
  }

  const { data } = await instance.request<ApiData>(config);

  return route.getData ? route.getData(data) : null;
};
