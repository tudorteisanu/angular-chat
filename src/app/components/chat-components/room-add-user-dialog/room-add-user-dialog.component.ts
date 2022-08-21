import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { RoomsService } from '@store/rooms.service';
import { UserInterface } from '@/ts/interfaces';
import { UserService } from '@store/user.service';
import { ErrorHandlerService } from '@services/error-handler.service';

const SEARCH_DEBOUNCE_TIME = 800;

@Component({
  selector: 'RoomAddUserDialog',
  templateUrl: './room-add-user-dialog.component.html',
})
export class RoomAddUserDialogComponent {
  @Input() roomId!: number;
  @Input() showDialog: boolean = false;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

  userSubscriber: Subscription | undefined;
  searchDebounce = timer(SEARCH_DEBOUNCE_TIME);
  searchUsers: UserInterface[] = [];

  constructor(
    private readonly roomService: RoomsService,
    private readonly userService: UserService,
    private readonly errorHandler: ErrorHandlerService
  ) {}

  searchUser(event: any): void {
    const value = event?.target?.value;

    if (value.length < 3) {
      this.searchUsers = [];
      return;
    }

    if (!this.userSubscriber?.closed) {
      this.userSubscriber?.unsubscribe();
    }

    this.userSubscriber = this.searchDebounce.subscribe(() => {
      this.userService.searchUser(value).subscribe({
        next: (users: UserInterface[]) => {
          this.searchUsers = users;
        },
        error: (error: HttpErrorResponse) => {
          this.errorHandler.handleError(error);
        },
      });
    });
  }

  addUserToRoom(userId: number): void {
    this.roomService.addUserToRoom(this.roomId, userId).subscribe({
      next: () => {
        this.hideAddUserModal();
      },
      error: (error: HttpErrorResponse) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  hideAddUserModal(): void {
    this.closeDialog.emit();
  }
}
