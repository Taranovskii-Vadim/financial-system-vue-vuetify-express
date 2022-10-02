import { Method, Route } from "./types";

class PostAuth implements Route {
  method: Method = "POST";

  getUrl = (mode: "signIn" | "signUp") => `/auth/${mode}`;

  getData = (data: undefined) => data;
}

export default new PostAuth();
