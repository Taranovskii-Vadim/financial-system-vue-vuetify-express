import { Method, Route } from "./types";

interface ResultDTO {
  id: number;
  amount: number;
  categoryId: number;
  description: string;
}

class GetRecords implements Route {
  method: Method = "GET";

  getUrl = () => "/records";

  getData = (data: ResultDTO[]) => data;
}

export default new GetRecords();
