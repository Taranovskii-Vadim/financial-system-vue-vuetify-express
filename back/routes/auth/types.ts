import { Request } from "express";

import { TokenUser } from "../../types";

export type R<T> = Request<any, any, T>;

export type User = TokenUser & {
  readonly id: number;
  surname?: string;
  bill?: number;
  password: string;
};

export type CommonPayload = { email: string; password: string };

export type SignUpPayload = CommonPayload & { name: string };
