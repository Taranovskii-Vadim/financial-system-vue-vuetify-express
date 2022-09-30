import { Currency } from "@/store/currencies/types";
import { Method, Route } from "./types";

interface ResultDTO {
  key: string;
  // TODO here we have string from api
  rate: number;
  date: string;
}

class GetCurrencies implements Route {
  method: Method = "GET";

  getUrl = () => "/currencies";

  getData = (data: ResultDTO[]): Currency[] => data;
}

export default new GetCurrencies();
