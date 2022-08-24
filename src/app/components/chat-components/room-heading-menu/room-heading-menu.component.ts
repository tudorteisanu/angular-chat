import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsService } from '@store/rooms.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

const HIDE_MENU_TIMEOUT = 200;

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
    this.showAddUserModal.emit();
    this.hideMenu();
  }

  removeRoom(): void {
    this.roomService.removeRoom(this.roomId).subscribe({
      next: () => {
        this.router.navigate(['.']);
      },
    });
  }

  toggleMenu(): void {
    this.menu = !this.menu;
  }

  hideMenu(): void {
    timer(HIDE_MENU_TIMEOUT).subscribe(() => {
      this.menu = false;
    });
  }
}
