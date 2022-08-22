import { Injectable, Injector } from '@angular/core';
import {
  CreateMessageInterface,
  MessageInterface,
  PaginationInterface,
} from 'src/ts/interfaces';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes, SocketEvents } from 'src/ts/enum';
import { AuthService } from './auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { SocketIoService } from 'src/app/services/socket.io.service';
import { ErrorHandlerService } from '@services/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: MessageInterface[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private utilsService: UtilsService,
    private injector: Injector,
    private readonly socketIoService: SocketIoService,
    private errorHandler: ErrorHandlerService
  ) {
    this.subscribeNewMessage();
    this.subscribeRemoveMessage();
  }

  subscribeNewMessage(): void {
    this.socketIoService.socket?.on(
      SocketEvents.AddMessage,
      (data: MessageInterface) => {
        this.messages.push(data);
        this.utilsService.scrollToBottom('messages');
      }
    );
  }

  subscribeRemoveMessage(): void {
    this.socketIoService.socket?.on(
      SocketEvents.DeleteMessage,
      ({ messageId }: { messageId: number }) => {
        const messageToRemoveIndex = this.messages.findIndex(
          (message: MessageInterface) => message.id === messageId
        );

        if (messageToRemoveIndex !== -1) {
          this.messages.splice(messageToRemoveIndex, 1);
        }

        this.utilsService.scrollToBottom('messages');
      }
    );
  }

  fetchMessages(roomId: number) {
    this.http
      .get<PaginationInterface<MessageInterface>>(ApiRoutes.Messages, {
        params: { roomId },
      })
      .subscribe({
        next: ({ data }: PaginationInterface<MessageInterface>) => {
          this.messages = data;
          this.utilsService.scrollToBottom('messages');
        },
        error: (error: Error) => {
          this.errorHandler.handleError(error);
        },
      });
  }

  public getMessagesByRoomId(roomId: number): MessageInterface[] {
    return this.messages.filter(
      (message: MessageInterface) => message.room.id === roomId
    );
  }

  sendMessage(payload: CreateMessageInterface): void {
    this.socketIoService.socket?.emit(SocketEvents.SendMessage, payload);
  }

  removeMessage(messageId: number): void {
    this.socketIoService.socket?.emit(SocketEvents.DeleteMessage, messageId);
  }
}
