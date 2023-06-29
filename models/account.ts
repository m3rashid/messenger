import { BaseModel } from './base';
import { User } from './user';

export interface Account extends BaseModel {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;

  user: User;
}
