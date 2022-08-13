import { Injectable } from '@angular/core';
import { MessageInterface, PaginationInterface} from "src/ts/interfaces";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ApiRoutes} from "src/ts/enum";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: MessageInterface[] = [];

  constructor(private http: HttpClient) {
  }

  fetchMessages() {
    this.http.get<PaginationInterface<MessageInterface>>(ApiRoutes.Rooms).subscribe(
      ({data}: PaginationInterface<MessageInterface>) => {
        this.messages = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

  }
}
