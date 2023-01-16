export type User = {
  name: string;
  email: string;
  username: string;
  password: string;
  team: string;
  rank: string;
  roles: string[];
  isAdmin: boolean;
  canEdit: boolean;
  verificationCode: string;
  passwordResetCode: string | null;
  isVerified: boolean;
};
