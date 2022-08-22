import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageRoutes } from '@/ts/enum';

@Component({
  selector: 'RoomHeading',
  templateUrl: './room-heading.component.html',
})
export class RoomHeadingComponent {
  @Input() roomName: string | undefined;
  @Input() roomId!: number;
  @Output() showAddUserModal: EventEmitter<void> = new EventEmitter<void>();

  get roomsPageUrl(): string {
    return PageRoutes.Rooms;
  }

  showAddUser(): void {
    this.showAddUserModal.emit();
  }
}
