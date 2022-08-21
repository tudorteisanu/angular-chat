import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  RoomInterface,
  CreateRoomInterface,
  PaginationInterface,
} from 'src/ts/interfaces';
import { ApiRoutes, PageRoutes } from 'src/ts/enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  rooms: RoomInterface[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  fetchRooms() {
    this.http
      .get<PaginationInterface<RoomInterface>>(ApiRoutes.Rooms)
      .subscribe({
        next: ({ data }: PaginationInterface<RoomInterface>) => {
          this.rooms = data;
        },
        error: (error: HttpErrorResponse) => console.log(error),
      });
  }

  createRoom(payload: CreateRoomInterface) {
    this.http.post<void>(ApiRoutes.Rooms, payload).subscribe({
      next: () => this.router.navigateByUrl(PageRoutes.Rooms),
      error: (error: HttpErrorResponse) => console.log(error),
    });
  }
}
