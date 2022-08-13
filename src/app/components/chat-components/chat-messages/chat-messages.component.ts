import { Component, OnInit } from '@angular/core';
import { MessageInterface } from 'src/ts/interfaces';
import { MessagesService } from 'src/app/store/messages.service';

@Component({
  selector: 'ChatMessages',
  templateUrl: './chat-messages.component.html',
})
export class ChatMessagesComponent implements OnInit {
  constructor(private messagesService: MessagesService) {}

  get messages(): MessageInterface[] {
    return this.messagesService.messages;
  }

  ngOnInit(): void {}
}
