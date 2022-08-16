import { Injectable } from '@angular/core';
import {MessageInterface} from "src/ts/interfaces";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ApiRoutes} from "src/ts/enum";
import {Socket} from "ngx-socket-io";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: MessageInterface[] = [];

  newMessageEvent = this.socket.fromEvent<string>('addMessage');

  constructor(private http: HttpClient, private socket: Socket, private authService: AuthService) {
    this.subscribeNewMessages()
    this.subscribeTokenChange()
  }

  subscribeTokenChange(): void {
    this.authService.credentialsEvent.subscribe((data: any) => {
      const {token} = data;
      this.socket.ioSocket.auth = {
        token
      }
    })
  }

  fetchMessages(roomId: number) {
    this.http.get<MessageInterface[]>(ApiRoutes.Messages, {params: {roomId}}).subscribe(
      (data: MessageInterface[]) => {
        this.messages = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public getMessagesByRoomId(roomId: number): MessageInterface[] {
    return this.messages.filter((message: MessageInterface) => message.room.id === roomId)
  }

  subscribeNewMessages() {
    return this.newMessageEvent.subscribe((data: any)=> {
      this.messages.push(data)
      this.scrollToBottom()
    });
  }

  sendMessage(payload: any): void {
    this.socket.emit('sendMessage', payload)
  }

  scrollToBottom(): void {
    const messagesBlock = document.getElementById('messages')!;
    const {scrollHeight, offsetHeight} = messagesBlock;

    if (scrollHeight !== offsetHeight) {
      setTimeout(()=> {
        messagesBlock?.scroll({
          top: scrollHeight  ,
          behavior: 'smooth',
        })
      }, 100)
    }

  }
}
