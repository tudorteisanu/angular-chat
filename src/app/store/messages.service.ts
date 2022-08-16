import { Injectable } from '@angular/core';
import { MessageInterface} from "src/ts/interfaces";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ApiRoutes} from "src/ts/enum";
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: MessageInterface[] = [];

  newMessageEvent = this.socket.fromEvent<string>('addMessage');

  constructor(private http: HttpClient, private socket: Socket) {
    this.subscribeNewMessages()
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


  subscribeNewMessages() {
    return this.newMessageEvent.subscribe((data: any)=> {
      this.messages.push(data)
      this.scrollToBottom()
    });
  }

  sendMessage(message: string, roomId: number): void {
    this.socket.emit('sendMessage', {message, roomId})
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
