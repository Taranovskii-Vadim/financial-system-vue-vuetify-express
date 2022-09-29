import { Method, Route } from "./types";

interface ResultDTO {
  bill: number;
  fullname: string;
}

class PostAuth implements Route {
  method: Method = "POST";

  getUrl = (mode: "signIn" | "signUp") => `/auth/${mode}`;

  getData = (data: ResultDTO) => data;
}

export default new PostAuth();
