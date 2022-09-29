export type Method = "GET" | "POST";

export type ApiData = object;

export type ApiResult = Promise<ApiData | null>;

export interface Route {
  method: Method;

  getUrl: (query?: any) => string;

  getData?: (dto: any) => any;
}
