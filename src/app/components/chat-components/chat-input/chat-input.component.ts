import {Component, Input} from '@angular/core';
import {MessagesService} from "../../../store/messages.service";

@Component({
  selector: 'ChatInput',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent {
  @Input() roomId!: number;
  @Input() maxRows: number = 4;

  rows: number = 1;
  message: string = ''

  constructor(
    private messagesService: MessagesService,) { }

  sendMessage(): void {
    this.messagesService.sendMessage(this.message, this.roomId)
    this.resetForm();
    this.scrollToBottom()
  }

  resetForm(): void {
    this.message = '';
    this.rows = 1;
  }


  scrollToBottom(): void {
    const messagesBlock = document.getElementById('messages')!;
    const {scrollHeight, offsetHeight} = messagesBlock;

    if (scrollHeight !== offsetHeight) {
      setTimeout(()=> {
        messagesBlock?.scroll({
          top: scrollHeight  ,
          behavior: 'smooth',
        })
      }, 100)
    }

  }

  addRow(): void {
    if (this.rows >= this.maxRows) {
      return
    }
    this.rows++
    this.message += '\n'
  }
}
