import { Component, OnInit } from '@angular/core';
import { ChatInterface } from 'src/ts/interfaces';
import {ChatService} from "src/app/store/chat.service";

@Component({
  selector: 'ChatList',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
  get rooms(): ChatInterface[] {
    return this.chat.rooms
  }
  constructor(private chat: ChatService) {}

  ngOnInit(): void {
    this.chat.fetchChats()
  }
}
