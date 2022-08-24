import { Injectable } from '@angular/core';
import { AlertInterface } from '@/ts/interfaces';
import { AlertType } from '@/ts/enum';
import { randomInteger } from '@/app/utils';
import { MAX_SHOWED_ALERTS, REMOVE_ALERT_TIMEOUT } from '@/ts/consts';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  items: AlertInterface[] = [];

  show(options: Partial<AlertInterface>): void {
    const alert: AlertInterface = {
      id: randomInteger(100, 99999),
      title: 'Error',
      message: '',
      type: AlertType.Success,
      ...options,
    };
    if (this.items.length > MAX_SHOWED_ALERTS) {
      // delete old one alert
      this.items.splice(0, 1);
    }

    this.items.push(alert);

    // hide alert after timer
    timer(REMOVE_ALERT_TIMEOUT).subscribe(() => {
      this.hide(alert.id);
    });
  }

  hide(id: number): void {
    const itemIndex = this.items.findIndex(
      (item: AlertInterface) => item.id === id
    );

    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
