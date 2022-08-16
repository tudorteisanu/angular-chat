import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css']
})
export class BaseInputComponent implements OnInit {
  @Input() inputType: string = 'text'
  @Input() label: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
