import axios, { AxiosRequestConfig } from "axios";

import { Route, Payload, Query, ApiData, ApiResult } from "./types";

const instance = axios.create({ baseURL: "/api" });

export const api = async <R extends Route>(
  { method, getUrl, ...route }: R,
  payload?: Payload,
  query?: Query
): ApiResult => {
  let config: AxiosRequestConfig = { method, url: getUrl(query) };

  if (payload) {
    config = { ...config, data: payload };
  }

  const { data } = await instance.request<ApiData>(config);

  return route.getData ? route.getData(data) : null;
};
