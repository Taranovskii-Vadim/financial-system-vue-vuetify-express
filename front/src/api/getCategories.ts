import { Category } from "@/store/categories/types";
import { Method, Route } from "./types";

interface ResultDTO {
  id: number;
  name: string;
  limit: number;
}

class GetCategories implements Route {
  method: Method = "GET";

  getUrl = () => "/categories";

  getData = (data: ResultDTO[]): Category[] => data;
}

export default new GetCategories();
