import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PageRoutes } from 'src/ts/enum';
import { MessagesService } from 'src/app/store/messages.service';
import {ChatService} from "../../../store/chat.service";
import {ChatInterface, UserInterface,} from "../../../../ts/interfaces";
import {ErrorHandlerService} from "../../../services/error-handler.service";
import {UserService} from "../../../store/user.service";
import {FormControl} from "@angular/forms";
import {Subject, Subscription, timer} from "rxjs";

@Component({
  selector: 'ChatItem',
  templateUrl: './chat-item.component.html',
})
export class ChatItemComponent implements OnInit {
  room: ChatInterface | null = null
  searchValue: FormControl = new FormControl('');
  searchDebounce = timer(800);
  searchSubscriber: Subscription | undefined;
  searchUsers: UserInterface[] = []

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private messagesService: MessagesService,
    private roomsService: ChatService,
    private readonly errorHandler: ErrorHandlerService,
    private readonly usersService: UserService,
  ) {}

  ngOnInit(): void {
    this.messagesService.fetchMessages(this.roomId)
    this.fetchRoom()
  }

  get roomId(): number {
    return Number(this.route.snapshot.params['id'])
  }

  get chatPageUrl(): string {
    return PageRoutes.Chat;
  }

  fetchRoom(): void {
   this.roomsService.fetchRoomById(this.roomId).subscribe({
     next: (data: ChatInterface) => {
     this.room = data
   },
   error: (error: any) => this.errorHandler.handleError(error)
   })
  }

  async goBack(): Promise<void> {
    await this.router.navigateByUrl(this.chatPageUrl);
  }

  searchUser(): void {
    if (!this.searchSubscriber?.closed) {
      this.searchSubscriber?.unsubscribe()
    }

    this.searchSubscriber = this.searchDebounce.subscribe(()=> {
      if (this.searchValue.value.length < 2) {
        this.searchUsers = []
        return
      }

      this.usersService.searchUser(this.searchValue.value)
        .subscribe(data => {
          this.searchUsers = data
        })
    })
  }

  addUserToRoom(userId: number): void {
    this.roomsService.addUserToRoom(this.roomId, userId)
  }

  hideSearchItems(): void {
    timer(200).subscribe(() => {
      this.searchValue.reset()
    })

  }
}
