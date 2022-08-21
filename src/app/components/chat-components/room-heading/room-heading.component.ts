import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageRoutes } from '@/ts/enum';

@Component({
  selector: 'RoomHeading',
  templateUrl: './room-heading.component.html',
})
export class RoomHeadingComponent {
  @Input() roomName: string | undefined;
  @Output() showAddUserModal: EventEmitter<void> = new EventEmitter<void>();

  get roomsPageUrl(): string {
    return PageRoutes.Rooms;
  }

  showAddUser() {
    this.showAddUserModal.emit();
  }
}
