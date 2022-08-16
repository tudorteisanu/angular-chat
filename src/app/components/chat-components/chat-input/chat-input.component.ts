import {Component, Input} from '@angular/core';
import {MessagesService} from "../../../store/messages.service";
import {HttpClient} from "@angular/common/http";
import {ApiRoutes} from "src/ts/enum";
import {MediaInterface} from "src/ts/interfaces";

@Component({
  selector: 'ChatInput',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent {
  @Input() roomId!: number;
  @Input() maxRows: number = 4;

  model: any = {
    message: '',
    attachments: []
  }

  rows: number = 1;

  constructor(
    private messagesService: MessagesService,
    private readonly http: HttpClient) { }

  sendMessage(): void {
    this.messagesService.sendMessage({
      ...this.model,
      room: {
        id: this.roomId,
      }})
    this.resetForm();
    this.scrollToBottom()
  }

  resetForm(): void {
    this.model = {
      message: '',
      attachments: []
    }
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
    this.model.message += '\n'
  }

  onUploadFile(event: any): void {
    const [file] = event.target.files
    const formData = new FormData();
    formData.append('file', file);
    this.uploadFile((formData))
  }

  uploadFile(data: FormData): void {
    this.http.post<MediaInterface>(ApiRoutes.Upload, data).subscribe((data: MediaInterface) => {
      this.model.attachments.push(data)
    })
  }
}