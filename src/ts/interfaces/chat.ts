import {UserInterface} from "./user";
import {MediaInterface} from "./media";

export interface CreateChatInterface {
  name: string;
  avatar?: MediaInterface | null
}

export interface ChatInterface extends CreateChatInterface{
  id: number;
  lastMessage: MessageInterface;
}

export interface MessageInterface {
  id: number;
  message: string;
  author: UserInterface;
  createdAt: Date | string | number
}
