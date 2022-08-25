import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { RoomContentComponent } from './room-content/room-content.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomHeadingComponent } from './room-heading/room-heading.component';
import { RoomAddUserDialogComponent } from './room-add-user-dialog/room-add-user-dialog.component';
import { RoomHeadingMenuComponent } from './room-heading-menu/room-heading-menu.component';
import { RoomMessagesComponent } from '@components/room-components/room-messages/room-messages.component';
import { RoomInputComponent } from '@components/room-components/room-input/room-input.component';
import { RoomListItemComponent } from '@components/room-components/room-list-item/room-list-item.component';

@NgModule({
  declarations: [
    RoomContentComponent,
    RoomMessagesComponent,
    RoomListItemComponent,
    RoomInputComponent,
    RoomHeadingComponent,
    RoomAddUserDialogComponent,
    RoomHeadingMenuComponent,
  ],
  imports: [CommonModule, BaseModule, RouterModule, FormsModule],
  exports: [
    RoomContentComponent,
    RoomMessagesComponent,
    RoomInputComponent,
    RoomHeadingComponent,
    RoomAddUserDialogComponent,
  ],
})
export class RoomComponentsModule {}
