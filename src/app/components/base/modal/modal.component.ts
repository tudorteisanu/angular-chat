import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  emitCloseDialog(): void {
    this.closeDialog.emit();
  }
}
