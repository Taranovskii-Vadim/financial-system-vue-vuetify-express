import { Method, Route } from "./types";

class PostRecord implements Route {
  method: Method = "POST";

  getUrl = () => "/records";

  getData = (data: number) => data;
}

export default new PostRecord();
