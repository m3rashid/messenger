import { BaseModel } from './base';
import { Message } from './message';
import { User } from './user';

export interface Conversation extends BaseModel {
  lastMessageAt: Date;
  name?: string;
  isGroup?: boolean;

  messages: Message[];
  users: User[];
}
