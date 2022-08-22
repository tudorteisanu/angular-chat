import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  RoomInterface,
  CreateRoomInterface,
  PaginationInterface,
} from 'src/ts/interfaces';
import { ApiRoutes } from 'src/ts/enum';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@services/error-handler.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  rooms: RoomInterface[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private readonly errorHandler: ErrorHandlerService
  ) {}

  fetchRooms() {
    this.http
      .get<PaginationInterface<RoomInterface>>(ApiRoutes.Rooms)
      .subscribe({
        next: ({ data }: PaginationInterface<RoomInterface>) => {
          this.rooms = data;
        },
        error: (error: HttpErrorResponse) => {
          this.errorHandler.handleError(error);
        },
      });
  }

  fetchRoomById(roomId: number): Observable<RoomInterface> {
    const roomByIdUrl = `${ApiRoutes.Rooms}/${roomId}`;
    return this.http.get<RoomInterface>(roomByIdUrl);
  }

  createRoom(payload: CreateRoomInterface): Observable<any> {
    return this.http.post<void>(ApiRoutes.Rooms, payload);
  }

  removeRoom(roomId: number): Observable<void> {
    const roomByIdUrl = `${ApiRoutes.Rooms}/${roomId}`;
    return this.http.delete<void>(roomByIdUrl);
  }

  addUserToRoom(roomId: number, userId: number): Observable<void> {
    const addUserToRoomByIdUrl = `${ApiRoutes.Rooms}/${roomId}/add-user`;
    return this.http.post<void>(addUserToRoomByIdUrl, { userId });
  }
}
