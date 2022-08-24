import { Component } from '@angular/core';
import { LoaderService } from '@services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [],
})
export class LoaderComponent {
  constructor(private readonly loaderService: LoaderService) {}

  get showLoader(): boolean {
    return this.loaderService.showLoaderEvent.getValue();
  }
  get showHttpLoader(): boolean {
    return this.loaderService.httpLoaderEvent.getValue();
  }
}
