export interface AccountData {
  accountNumber: string | undefined;
  bank: string | undefined;
}

export interface ProfileData {
  accountNumber: string | undefined;
  bank: string | undefined;
  email: string;
  id: number;
  linkedToYanolja: boolean;
  phone: string;
  name: string;
}
