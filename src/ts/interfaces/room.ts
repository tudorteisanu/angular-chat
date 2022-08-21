import { UserInterface } from './user';
import { MediaInterface } from './media';

export interface CreateRoomInterface {
  name: string;
  avatar?: MediaInterface | null;
}

export interface RoomInterface extends CreateRoomInterface {
  id: number;
  lastMessage: MessageInterface;
}

export interface CreateMessageInterface {
  message: string;
  room: Partial<RoomInterface>;
  attachments: MediaInterface[];
}

export interface MessageInterface extends CreateMessageInterface {
  id: number;
  author: UserInterface;
  createdAt: Date | string | number;
}
