import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsService } from '@store/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'RoomHeadingMenu',
  templateUrl: './room-heading-menu.component.html',
  styles: [],
})
export class RoomHeadingMenuComponent implements OnInit {
  @Output() showAddUserModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() roomId!: number;
  menu: boolean = false;

  constructor(
    private readonly roomService: RoomsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showAddUser() {
    this.hideMenu();
    this.showAddUserModal.emit();
  }

  removeRoom(): void {
    this.roomService.removeRoom(this.roomId).subscribe({
      next: () => {
        this.router.navigate(['.']);
      },
    });
  }

  showMenu(): void {
    this.menu = true;
  }

  hideMenu(): void {
    this.menu = false;
  }
}
