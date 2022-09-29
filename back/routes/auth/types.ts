import { TokenUser } from "../../types";

export type User = TokenUser & {
  readonly id: number;
  surname?: string;
  bill?: number;
  password: string;
};

export type CommonDTO = { email: string; password: string };

export type SignUpDTO = CommonDTO & { name: string };
