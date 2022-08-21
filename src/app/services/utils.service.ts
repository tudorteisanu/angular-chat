import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  scrollToBottom(nodeId = '', timeout = 400): void {
    let scrollElement: any;

    if (nodeId) {
      scrollElement = document.getElementById(nodeId)!;
    } else {
      scrollElement = document.body;
    }

    if (!scrollElement) {
      return;
    }

    setTimeout(() => {
      scrollElement.scroll({
        top: scrollElement.scrollHeight,
        behavior: 'smooth',
      });
    }, timeout);
  }
}
