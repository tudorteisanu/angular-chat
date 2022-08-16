import { Component } from '@angular/core';
import {ChatService} from "../../../store/chat.service";
import {CreateChatInterface} from "../../../../ts/interfaces/chat";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
})
export class CreateChatComponent {
  form: CreateChatInterface = {
    name: '',
}

  constructor(private chatService: ChatService) { }

  createChat(): void {
    this.chatService.createChat(this.form)
  }

}
