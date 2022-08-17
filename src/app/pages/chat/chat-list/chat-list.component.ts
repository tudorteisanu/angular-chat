import { Component, OnInit } from '@angular/core';
import { ChatInterface } from 'src/ts/interfaces';
import {ChatService} from "src/app/store/chat.service";
import {Router} from "@angular/router";
import {PageRoutes} from "src/ts/enum";

@Component({
  selector: 'ChatList',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
  constructor(private chatService: ChatService, private router: Router) {}

  get rooms(): ChatInterface[] {
    return this.chatService.rooms
  }

  ngOnInit(): void {
    this.chatService.fetchChats()
  }

  async createChat(): Promise<void> {
    await this.router.navigateByUrl(PageRoutes.CreateRoom)
  }
}
