export interface FormPayload {
  categoryId: number;
  type: "income" | "outcome";
  amount: number;
  description: string;
}

export interface Record extends FormPayload {
  readonly id: number;
}
