import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageRoutes } from 'src/ts/enum';
import { MessagesService } from 'src/app/store/messages.service';

@Component({
  selector: 'RoomItem',
  templateUrl: './rooms-item.component.html',
})
export class RoomsItemComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.messagesService.fetchMessages(this.roomId);
  }

  get roomId(): number {
    return Number(this.route.snapshot.params['id']);
  }

  get roomsPageUrl(): string {
    return PageRoutes.Rooms;
  }

  async goBack(): Promise<void> {
    await this.router.navigateByUrl(this.roomsPageUrl);
  }
}
