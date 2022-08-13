import { Component, Input, OnInit } from '@angular/core';
import { ChatInterface } from 'src/ts/interfaces';

@Component({
  selector: 'ChatContent',
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements OnInit {
  @Input() chats: ChatInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
