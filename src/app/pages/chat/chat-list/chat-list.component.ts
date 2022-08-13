import { Component, OnInit } from '@angular/core';
import { ChatInterface } from '../../../../ts/interfaces';

@Component({
  selector: 'ChatList',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
  chats: ChatInterface[] = [
    {
      id: 1,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message1',
      },
    },
    {
      id: 2,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message2',
      },
    },
    {
      id: 3,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message2',
      },
    },
    {
      id: 4,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message2',
      },
    },
    {
      id: 5,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message2',
      },
    },
    {
      id: 6,
      name: 'Name of chat',
      lastMessage: {
        id: 1,
        author: {
          id: 1,
          name: 'Mike',
          email: 'mike@example.com',
        },
        message: 'Some message',
        createdAt: new Date(),
      },
      avatar: {
        id: 1,
        url: 'https://i.pravatar.cc/64?u=message2',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
