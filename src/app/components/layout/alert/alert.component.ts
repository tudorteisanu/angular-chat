import { Component } from '@angular/core';
import { AlertService } from '@services/alert.service';
import { AlertInterface } from '@/ts/interfaces';
import { alertAnimation } from '@components/layout/alert/alert.animation';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [alertAnimation],
})
export class AlertComponent {
  get items(): AlertInterface[] {
    return this.alertService.items;
  }

  constructor(private readonly alertService: AlertService) {}
}
