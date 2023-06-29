import { BaseModel } from './base';
import { Conversation } from './conversation';
import { User } from './user';

export interface Message extends BaseModel {
  body?: string;
  image?: string;
  seen: User[];

  conversation: Conversation;
  sender: User;
}
