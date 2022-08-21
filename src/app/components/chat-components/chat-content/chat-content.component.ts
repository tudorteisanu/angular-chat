import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from 'src/ts/interfaces';

@Component({
  selector: 'ChatContent',
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements OnInit {
  @Input() chats: RoomInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
