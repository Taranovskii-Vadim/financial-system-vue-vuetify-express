export interface CommonData {
  name: string;
  limit: number;
}

export interface Category extends CommonData {
  readonly id: number;
}
