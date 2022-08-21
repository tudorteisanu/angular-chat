import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/store/messages.service';
import { RoomInterface, UserInterface } from 'src/ts/interfaces';
import { RoomsService } from 'src/app/store/rooms.service';
import { UserService } from 'src/app/store/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '@/app/services/error-handler.service';

@Component({
  selector: 'RoomItem',
  templateUrl: './rooms-item.component.html',
})
export class RoomsItemComponent implements OnInit {
  searchUsers: UserInterface[] = [];
  room: RoomInterface | undefined;
  isShowAddUserModal: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private messagesService: MessagesService,
    private readonly roomService: RoomsService,
    private readonly userService: UserService,
    private readonly errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.fetchRoom();
    this.messagesService.fetchMessages(this.roomId);
  }

  get roomId(): number {
    return Number(this.route.snapshot.params['id']);
  }

  fetchRoom(): void {
    this.roomService.fetchRoomById(this.roomId).subscribe({
      next: (room: RoomInterface) => {
        this.room = room;
      },
      error: (error: HttpErrorResponse) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  showAddUserModal(): void {
    this.isShowAddUserModal = true;
  }

  hideAddUserModal(): void {
    this.isShowAddUserModal = false;
  }
}
