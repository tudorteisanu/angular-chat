import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {ChatInterface, PaginationInterface} from 'src/ts/interfaces';
import {ApiRoutes, PageRoutes} from 'src/ts/enum';
import {Router} from "@angular/router";
import {CreateChatInterface} from "src/ts/interfaces/chat";

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  rooms: ChatInterface[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  fetchChats() {
    this.http
      .get<PaginationInterface<ChatInterface>>(ApiRoutes.Rooms)
      .subscribe(
        {
          next: ({data}: PaginationInterface<ChatInterface>) => {
            this.rooms = data;
          },
          error: (error: HttpErrorResponse) =>  console.log(error)
        }
      );
  }

  createChat(payload: CreateChatInterface) {
    this.http
      .post<void>(ApiRoutes.Rooms, payload)
      .subscribe({
        next: () => this.router.navigateByUrl(PageRoutes.Chat),
        error: (error: HttpErrorResponse) =>  console.log(error)
        }
      );
  }

}
