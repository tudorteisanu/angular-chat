import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { RouterModule } from '@angular/router';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatListItemComponent } from './chat-list-item/chat-list-item.component';

@NgModule({
  declarations: [ChatContentComponent, ChatMessagesComponent, ChatListItemComponent],
  imports: [CommonModule, BaseModule, RouterModule],
  exports: [ChatContentComponent, ChatMessagesComponent],
})
export class ChatComponentsModule {}
