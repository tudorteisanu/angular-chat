import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@store/auth.service';
import { CredentialsInterface } from 'src/ts/interfaces';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  get credentials(): CredentialsInterface | null {
    return this.auth.credentialsEvent.getValue();
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.credentials && this.credentials.token) {
      return next.handle(
        request.clone({
          headers: request.headers.set(
            'Authorization',
            `Bearer ${this.credentials.token}`
          ),
        })
      );
    }

    return next.handle(request);
  }
}
