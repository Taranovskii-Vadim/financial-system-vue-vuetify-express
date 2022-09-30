export interface UserInfo {
  fullname: string;
  bill: number;
}

export interface CommonData {
  email: string;
  password: string;
}

export interface SignUpData extends CommonData {
  name: string;
}
