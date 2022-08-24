import { Injectable } from '@angular/core';
import { AlertService } from '@services/alert.service';
import { AlertType } from '@/ts/enum';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private readonly alertService: AlertService) {}

  handleError(e: any): void {
    this.alertService.show({ message: e.message, type: AlertType.Error });
  }
}
