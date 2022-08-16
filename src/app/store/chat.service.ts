import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChatInterface } from 'src/ts/interfaces';
import {ApiRoutes, PageRoutes} from 'src/ts/enum';
import {Router} from "@angular/router";
import {CreateChatInterface} from "../../ts/interfaces/chat";

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  rooms: ChatInterface[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  fetchChats() {
    this.http
      .get<ChatInterface[]>(ApiRoutes.Rooms)
      .subscribe(
        (data : ChatInterface[]) => {
          this.rooms = data;
          console.log(data)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  createChat(payload: CreateChatInterface) {
    this.http
      .post<void>(ApiRoutes.Rooms, payload)
      .subscribe(
        () => {
          this.router.navigateByUrl(PageRoutes.Chat)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

}
