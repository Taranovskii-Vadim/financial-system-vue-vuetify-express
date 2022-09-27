export interface User {
  readonly id: number;
  name: string;
  surname?: string;
  bill?: number;
  email: string;
  password: string;
}
