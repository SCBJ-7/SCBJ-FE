import { Nullable } from "./nullable";

export interface AccountData {
  accountNumber: Nullable<string>;
  bank: Nullable<string>;
}

export interface ProfileData {
  accountNumber: Nullable<string>;
  bank: Nullable<string>;
  email: string;
  id: number;
  linkedToYanolja: boolean;
  phone: string;
  name: string;
}
