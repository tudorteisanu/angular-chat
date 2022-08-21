import { Component, Input } from '@angular/core';
import { MessagesService } from '@store/messages.service';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from 'src/ts/enum';
import { CreateMessageInterface, MediaInterface } from 'src/ts/interfaces';
import { UtilsService } from '@services/utils.service';

@Component({
  selector: 'ChatInput',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent {
  @Input() roomId!: number;
  @Input() maxRows: number = 4;

  model: Pick<CreateMessageInterface, 'message' | 'attachments'> = {
    message: '',
    attachments: [],
  };

  rows: number = 1;

  constructor(
    private messagesService: MessagesService,
    private utilsService: UtilsService,
    private readonly http: HttpClient
  ) {}

  sendMessage(): void {
    this.messagesService.sendMessage({
      ...this.model,
      room: {
        id: this.roomId,
      },
    });
    this.resetForm();
    setTimeout(() => {
      this.utilsService.scrollToBottom('messages', 50);
    });
  }

  resetForm(): void {
    this.model = {
      message: '',
      attachments: [],
    };
    this.rows = 1;
  }

  addRow(): void {
    if (this.rows >= this.maxRows) {
      return;
    }
    this.rows++;
    this.model.message += '\n';
  }

  onUploadFile(event: any): void {
    const [file] = event.target.files;
    const formData = new FormData();

    formData.append('file', file);
    this.uploadFile(formData);
  }

  uploadFile(data: FormData): void {
    this.http
      .post<MediaInterface>(ApiRoutes.Upload, data)
      .subscribe((data: MediaInterface) => {
        this.model.attachments.push(data);
      });
  }
}
