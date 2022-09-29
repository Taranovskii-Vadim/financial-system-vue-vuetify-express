import { Request as ExpressRequest } from "express";

export type TokenUser = {
  name: string;
  email: string;
};

export interface Request extends ExpressRequest {
  user: TokenUser;
}
