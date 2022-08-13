export interface ChatInterface {
  id: number;
  name: string;
  lastMessage: Message;
  avatar: Media | null
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Media {
  id: number;
  url: string;
}

export interface Message {
  id: number;
  message: string;
  author: User;
  createdAt: Date | string | number
}
