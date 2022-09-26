export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  team: string;
  rank: string;
  role: string;
  isAdmin: boolean;
  verificationCode: string;
  passwordResetCode: string | null;
  isVerified: boolean;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LogoutData {
  token: string;
}
