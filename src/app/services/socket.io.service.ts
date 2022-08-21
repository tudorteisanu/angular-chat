import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '@/environments/environment';
import { AuthService } from '@store/auth.service';
import { CredentialsInterface, UserInterface } from 'src/ts/interfaces';

const IS_SOCKET_AUTO_CONNECT = true;
const RECONNECTION_ATTEMPTS = 5;
const RECONNECTION_DELAY_MS = 5000;

const CONNECT_EVENT_NAME = 'connect';
const JOIN_EVENT_NAME = 'join';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  socket: Socket;

  constructor(private authService: AuthService) {
    this.socket = io(environment.apiWsUrl, {
      autoConnect: IS_SOCKET_AUTO_CONNECT,
      transports: ['websocket', 'polling'],
      reconnectionDelay: RECONNECTION_DELAY_MS,
      reconnectionAttempts: RECONNECTION_ATTEMPTS,
      auth: {
        token: this.token,
      },
    });

    this.joinRoom();
  }

  get credentials(): CredentialsInterface | null {
    return this.authService.credentialsEvent.getValue();
  }

  get token(): string | undefined {
    return this.credentials?.token;
  }

  get user(): UserInterface | undefined {
    return this.credentials?.user;
  }

  get socketRoomName(): string {
    return String(this.user?.id || 'room');
  }

  joinRoom(): void {
    this.socket.on(CONNECT_EVENT_NAME, () => {
      this.emitJoinToSocketRoom();
    });
  }

  emitJoinToSocketRoom(): void {
    if (this.socketRoomName) {
      this.socket.emit(JOIN_EVENT_NAME, this.socketRoomName);
    }
  }
}
