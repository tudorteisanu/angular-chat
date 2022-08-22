import { Component, OnInit } from '@angular/core';
import { RoomInterface } from 'src/ts/interfaces';
import { RoomsService } from 'src/app/store/rooms.service';
import { PageRoutes } from 'src/ts/enum';

@Component({
  selector: 'RoomList',
  templateUrl: './rooms-list.component.html',
})
export class RoomsListComponent implements OnInit {
  constructor(private roomsService: RoomsService) {}

  get rooms(): RoomInterface[] {
    return this.roomsService.rooms;
  }

  get roomsCreateUrl(): string {
    return PageRoutes.CreateRoom;
  }

  ngOnInit(): void {
    this.roomsService.fetchRooms();
  }
}
