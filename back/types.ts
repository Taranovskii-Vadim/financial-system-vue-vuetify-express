import { Request as R } from "express";

export type TokenUser = {
  name: string;
  email: string;
};

export interface Request<T = undefined> extends R<any, any, T> {
  user: TokenUser;
}

export interface RequestWithID<T = undefined>
  extends R<{ id: string }, any, T> {
  user: TokenUser;
}
