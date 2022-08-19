import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChatListComponent} from './chat-list/chat-list.component';
import {ChatItemComponent} from './chat-item/chat-item.component';
import {ChatComponentsModule} from 'src/app/components/chat-components/chat-components.module';
import {BaseModule} from "../../components/base/base.module";
import {CreateChatComponent} from './create-chat/create-chat.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent,
  },
  {
    path: 'create',
    component: CreateChatComponent,
  },
  {
    path: ':id/messages',
    component: ChatItemComponent,
  },
];

@NgModule({
  declarations: [ChatListComponent, ChatItemComponent, CreateChatComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ChatComponentsModule, BaseModule, FormsModule],
})
export class ChatModule {
}
