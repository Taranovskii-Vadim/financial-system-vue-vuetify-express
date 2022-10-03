export interface FormPayload {
  type: "income" | "outcome";
  select: number;
  amount: number;
  description?: string;
}
