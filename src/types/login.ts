export interface MemberResponse {
  id: number;
  email: string;
  name: string;
  phone: string;
  accountNumber: string;
  bank: string;
  linkedToYanolja: boolean;
}

export interface LoginData {
  memberResponse: MemberResponse;
  tokenResponse: {
    accessToken: string;
    refreshToken: string;
  };
}
