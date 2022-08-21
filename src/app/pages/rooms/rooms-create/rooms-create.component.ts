import { Component } from '@angular/core';
import { RoomsService } from 'src/app/store/rooms.service';
import { CreateRoomInterface } from 'src//ts/interfaces';

@Component({
  selector: 'app-rooms-create',
  templateUrl: './rooms-create.component.html',
})
export class RoomsCreateComponent {
  form: CreateRoomInterface = {
    name: '',
  };

  constructor(private roomsService: RoomsService) {}

  createChat(): void {
    this.roomsService.createRoom(this.form);
  }
}
