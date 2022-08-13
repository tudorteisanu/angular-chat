import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChatInterface, PaginationInterface } from 'src/ts/interfaces';
import { ApiRoutes } from 'src/ts/enum';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  rooms: ChatInterface[] = [];

  constructor(private http: HttpClient) {}

  fetchChats() {
    this.http
      .get<PaginationInterface<ChatInterface>>(ApiRoutes.Rooms)
      .subscribe(
        ({ data }: PaginationInterface<ChatInterface>) => {
          this.rooms = data;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
}
