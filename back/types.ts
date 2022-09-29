import { Request as R } from "express";

export type TokenUser = {
  name: string;
  email: string;
};

export interface Request<T = undefined> extends R<any, any, T> {
  user: TokenUser;
}
