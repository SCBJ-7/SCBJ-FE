import type { ProfileData } from "./profile";
export interface LoginData {
  memberResponse: ProfileData;
  tokenResponse: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export type EmailValidateData = string;
