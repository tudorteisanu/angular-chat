import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-btn',
  templateUrl: './base-btn.component.html',
  styles: [
  ]
})
export class BaseBtnComponent implements OnInit {
  @Input() variant: 'outline' | 'link' = 'outline'

  constructor() { }

  ngOnInit(): void {
  }

}
