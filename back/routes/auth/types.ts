export type User = {
  readonly id: number;
  bill: number;
  name: string;
  email: string;
  surname?: string;
  password: string;
};

export type CommonDTO = { email: string; password: string };

export type SignUpDTO = CommonDTO & { name: string };
