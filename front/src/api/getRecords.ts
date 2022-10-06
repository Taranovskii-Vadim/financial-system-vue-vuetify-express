import { Method, Route } from "./types";

interface ResultDTO {
  id: number;
  amount: number;
  category: { id: number; name: string };
  description: string;
}

class GetRecords implements Route {
  method: Method = "GET";

  getUrl = () => "/records";

  getData = (data: ResultDTO[]) => data;
}

export default new GetRecords();
