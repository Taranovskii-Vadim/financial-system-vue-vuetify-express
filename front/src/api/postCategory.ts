import { Method, Route } from "./types";

class PostCategory implements Route {
  method: Method = "POST";

  getUrl = () => "/categories";

  getData = (data: number) => data;
}

export default new PostCategory();
