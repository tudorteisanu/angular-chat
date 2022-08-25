import { Component, Input, OnInit } from '@angular/core';
import { RoomInterface } from 'src/ts/interfaces';

@Component({
  selector: 'RoomContent',
  templateUrl: './room-content.component.html',
})
export class RoomContentComponent implements OnInit {
  @Input() rooms: RoomInterface[] = [];

  constructor() {}

  ngOnInit(): void {}
}
