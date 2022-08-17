import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PageRoutes } from 'src/ts/enum';
import { MessagesService } from 'src/app/store/messages.service';

@Component({
  selector: 'ChatItem',
  templateUrl: './chat-item.component.html',
})
export class ChatItemComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private messagesService: MessagesService,
  ) {}

  ngOnInit(): void {
    this.messagesService.fetchMessages(this.roomId)
  }

  get roomId(): number {
    return Number(this.route.snapshot.params['id'])
  }

  get chatPageUrl(): string {
    return PageRoutes.Chat;
  }

  async goBack(): Promise<void> {
    await this.router.navigateByUrl(this.chatPageUrl);
  }
}
