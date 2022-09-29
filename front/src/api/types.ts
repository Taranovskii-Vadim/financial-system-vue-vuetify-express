export type Method = "GET" | "POST";

export type Payload = object;

export type Query = string;

export type ApiData = object;

export type ApiResult = Promise<ApiData | null>;

export interface Route {
  method: Method;

  getUrl: (query?: Query) => string;

  getData?: (dto: ApiData) => object;
}
