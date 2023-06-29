import { Account } from './account';
import { BaseModel } from './base';
import { Conversation } from './conversation';
import { Message } from './message';

export interface User extends BaseModel {
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;

  conversations: Conversation[];
  seenMessages: Message[];
  accounts: Account[];
  messages: Message[];
}
