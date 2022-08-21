import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ChatInterface, PaginationInterface} from 'src/ts/interfaces';
import {ApiRoutes, PageRoutes} from 'src/ts/enum';
import {Router} from "@angular/router";
import {CreateChatInterface} from "src/ts/interfaces/chat";
import {Observable, shareReplay} from "rxjs";
import {ErrorHandlerService} from "../services/error-handler.service";

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  rooms: ChatInterface[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandler: ErrorHandlerService) {
  }

  fetchChats() {
    this.http
      .get<PaginationInterface<ChatInterface>>(ApiRoutes.Rooms)
      .pipe(shareReplay(1))
      .subscribe(
        {
          next: ({data}: PaginationInterface<ChatInterface>) => {
            this.rooms = data;
          },
          error: (error: HttpErrorResponse) => {
            this.errorHandler.handleError(error)
          }
        }
      );
  }

  fetchRoomById(roomId: number): Observable<ChatInterface> {
    const roomByIdUrl = `${ApiRoutes.Rooms}/${roomId}`
    return this.http.get<ChatInterface>(roomByIdUrl)
  }

  createChat(payload: CreateChatInterface) {
    this.http
      .post<void>(ApiRoutes.Rooms, payload)
      .subscribe({
          next: () => this.router.navigateByUrl(PageRoutes.Chat),
          error: (error: HttpErrorResponse) => {
            this.errorHandler.handleError(error)
          }
        }
      );
  }

  addUserToRoom(roomId: number, userId: number) {
    const addUserToRoomUrl = `${ApiRoutes.Rooms}/${roomId}/add-user`
    this.http
      .post<void>(addUserToRoomUrl, {userId})
      .subscribe({
          next: () => {
            console.log('success')
          },
          error: (error: HttpErrorResponse) => {
            this.errorHandler.handleError(error)
          }
        }
      );
  }

  removeUserFromRoom(roomId: number, userId: number) {
    const addUserToRoomUrl = `${ApiRoutes.Rooms}/${roomId}/remove-user`
    this.http
      .post<void>(addUserToRoomUrl, {userId})
      .subscribe({
          next: () => {
            console.log('success')
          },
          error: (error: HttpErrorResponse) => {
            this.errorHandler.handleError(error)
          }
        }
      );
  }

}
