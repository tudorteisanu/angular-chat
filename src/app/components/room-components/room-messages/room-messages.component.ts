import { Component, Input } from '@angular/core';
import { MessageInterface } from 'src/ts/interfaces';
import { MessagesService } from 'src/app/store/messages.service';
import { AuthService } from 'src/app/store/auth.service';

@Component({
  selector: 'RoomMessages',
  templateUrl: './room-messages.component.html',
})
export class RoomMessagesComponent {
  @Input() roomId: number | undefined;

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) {}

  get messages(): MessageInterface[] {
    return this.messagesService.getMessagesByRoomId(this.roomId!);
  }

  get authUser(): any {
    return this.authService.credentialsEvent.getValue()?.user;
  }

  isCurrentUser(message: MessageInterface): boolean {
    return message.author.id === this.authUser.id;
  }

  messageBlockClass(message: MessageInterface): string {
    if (this.isCurrentUser(message)) {
      return 'ml-auto';
    }

    return '';
  }

  dateClass(message: MessageInterface): string {
    if (this.isCurrentUser(message)) {
      return 'text-right';
    }
    return '';
  }

  messageClass(message: MessageInterface): string {
    if (this.isCurrentUser(message)) {
      return 'bg-green-50';
    }

    return 'bg-white';
  }

  removeMessage(messageId: number): void {
    this.messagesService.removeMessage(messageId);
  }
}
