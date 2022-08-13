import {UserInterface} from "./user";
import {MediaInterface} from "./media";

export interface ChatInterface {
  id: number;
  name: string;
  lastMessage: MessageInterface;
  avatar: MediaInterface | null
}

export interface MessageInterface {
  id: number;
  message: string;
  author: UserInterface;
  createdAt: Date | string | number
}
