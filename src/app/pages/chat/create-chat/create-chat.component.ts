import {Component} from '@angular/core';
import {ChatService} from "src/app/store/chat.service";
import {CreateChatInterface} from "src//ts/interfaces/chat";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
})
export class CreateChatComponent {
  form: CreateChatInterface = {
    name: '',
  }

  constructor(private chatService: ChatService) {
  }

  createChat(): void {
    this.chatService.createChat(this.form)
  }
}
