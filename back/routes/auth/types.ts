export interface User {
  readonly id: number;
  name: string;
  surname?: string;
  email: string;
  password: string;
}
