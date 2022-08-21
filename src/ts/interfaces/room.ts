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

export interface MessageInterface {
  id: number;
  message: string;
  author: UserInterface;
  createdAt: Date | string | number;
  room: Partial<RoomInterface>;
  attachments: MediaInterface[];
}
