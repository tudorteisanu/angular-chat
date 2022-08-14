import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  messagesEvent = this.socket.fromEvent<string>('addMessage');

  constructor(private socket: Socket) {
    this.messagesEvent.subscribe(data=> {
      console.log(data);
    })

  }

  test() {
    this.socket.emit('sendMessage', { message: 'some message' });
  }
}
