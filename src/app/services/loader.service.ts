import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import {
  ActivationEnd,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showLoaderEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  httpLoaderEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart || event instanceof ActivationEnd) {
        this.show();
      }
      if (event instanceof NavigationEnd) {
        this.hide();
      }
    });
  }

  show(): void {
    this.showLoaderEvent.next(true);
  }

  hide(): void {
    timer(100).subscribe(() => {
      this.showLoaderEvent.next(false);
    });
  }

  showHttpLoader(): void {
    this.httpLoaderEvent.next(true);
  }

  hideHttpLoader(): void {
    timer(100).subscribe(() => {
      this.httpLoaderEvent.next(false);
    });
  }
}
