import { UserInterface } from './user';

export interface LoginInterface {
  email: string;
  password: string;
}

export interface TokenInterface {
  token: string;
}

export interface CredentialsInterface extends TokenInterface {
  user: UserInterface;
}
