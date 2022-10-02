import { Method, Route } from "./types";

class PutCategory implements Route {
  method: Method = "PUT";

  getUrl = (id: number) => `/categories/${id}`;

  getData = (data: number) => data;
}

export default new PutCategory();
