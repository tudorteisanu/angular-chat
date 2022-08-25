import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from 'src/ts/interfaces';

@Component({
  selector: 'RoomListItem',
  templateUrl: './room-list-item.component.html',
})
export class RoomListItemComponent implements OnInit {
  @Input() room: RoomInterface | undefined;
  avatarLoaded: boolean = false;

  constructor() {}

  get avatarClass(): string {
    if (!this.avatarLoaded) {
      return 'hidden';
    }
    return '';
  }

  get showAvatarPreloader(): boolean {
    return !!this.room?.avatar?.url && !this.avatarLoaded;
  }

  get defaultAvatarUrl(): string {
    return 'assets/icons/default-avatar.svg';
  }

  setLoaded(): void {
    this.avatarLoaded = true;
  }

  ngOnInit(): void {}
}
