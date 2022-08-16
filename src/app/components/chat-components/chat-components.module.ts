import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { RouterModule } from '@angular/router';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ChatContentComponent, ChatMessagesComponent, ChatListItemComponent, ChatInputComponent],
  imports: [CommonModule, BaseModule, RouterModule, FormsModule],
  exports: [ChatContentComponent, ChatMessagesComponent, ChatInputComponent],
})
export class ChatComponentsModule {}
