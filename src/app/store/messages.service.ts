import { Injectable } from '@angular/core';
import { MessageInterface, PaginationInterface } from 'src/ts/interfaces';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes, SocketEvents } from 'src/ts/enum';
import { Socket } from 'ngx-socket-io';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { scrollToBottom } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: MessageInterface[] = [];

  newMessageEvent: Observable<MessageInterface> =
    this.socket.fromEvent<MessageInterface>(SocketEvents.AddMessage);

  constructor(
    private http: HttpClient,
    private socket: Socket,
    private authService: AuthService
  ) {
    this.subscribeNewMessages();
    this.subscribeCredentialsChange();
  }

  subscribeCredentialsChange(): void {
    this.authService.credentialsEvent.subscribe((data: any) => {
      const { token, user } = data;

      this.socket.ioSocket.auth = {
        token,
      };

      this.socket.emit('join', String(user.id));
    });
  }

  fetchMessages(roomId: number) {
    this.http
      .get<PaginationInterface<MessageInterface>>(ApiRoutes.Messages, {
        params: { roomId },
      })
      .subscribe({
        next: ({ data }: PaginationInterface<MessageInterface>) => {
          this.messages = data;
          scrollToBottom('messages');
        },
        error: (error: Error) => {
          console.log(error);
        },
      });
  }

  public getMessagesByRoomId(roomId: number): MessageInterface[] {
    return this.messages.filter(
      (message: MessageInterface) => message.room.id === roomId
    );
  }

  subscribeNewMessages(): void {
    this.newMessageEvent.subscribe({
      next: (data: any) => {
        this.messages.push(data);
        scrollToBottom('messages');
      },
    });
  }

  sendMessage(payload: MessageInterface): void {
    this.socket.emit(SocketEvents.SendMessage, payload);
  }
}
