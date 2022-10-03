export interface FormPayload {
  categoryId: number;
  amount: string;
  description: string;
}

export interface Record {
  readonly id: number;
  categoryId: number;
  amount: number;
  description: string;
}
