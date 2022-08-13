import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Pages} from "src/ts/enum";

@Component({
  selector: 'ChatItem',
  templateUrl: './chat-item.component.html',
})
export class ChatItemComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  get chatPageUrl(): string {
    return Pages.Chat
  }

  async goBack(): Promise<void> {
    await this.router.navigateByUrl(this.chatPageUrl)
  }

}
