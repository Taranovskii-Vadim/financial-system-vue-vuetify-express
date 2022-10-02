import { UserInfo } from "@/store/auth/types";
import { Method, Route } from "./types";

interface ResultDTO {
  bill: number;
  fullname: string;
  iat: number;
}

class GetCategories implements Route {
  method: Method = "GET";

  getUrl = () => "/profile";

  getData = ({ fullname, bill }: ResultDTO): UserInfo => ({ fullname, bill });
}

export default new GetCategories();
