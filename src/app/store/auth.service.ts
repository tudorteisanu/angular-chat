import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CredentialsInterface, LoginInterface } from 'src/ts/interfaces';
import { ApiRoutes, PageRoutes } from 'src/ts/enum';
import { BehaviorSubject } from 'rxjs';
import { RegisterInterface } from 'src/ts/interfaces/auth';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@services/error-handler.service';

const CREDENTIALS_KEY = 'credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentialsEvent: BehaviorSubject<CredentialsInterface | null> =
    new BehaviorSubject<CredentialsInterface | null>(this.defaultCredentials);

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  get defaultCredentials(): CredentialsInterface | null {
    if (localStorage.getItem(CREDENTIALS_KEY)) {
      return JSON.parse(localStorage.getItem(CREDENTIALS_KEY)!);
    }
    return null;
  }

  login(payload: LoginInterface) {
    this.http.post<CredentialsInterface>(ApiRoutes.Login, payload).subscribe({
      next: (credentials: CredentialsInterface) => {
        localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
        this.credentialsEvent.next(credentials);
        this.router.navigateByUrl(PageRoutes.Rooms);
      },
      error: (error: HttpErrorResponse) => {
        this.errorHandler.handleError(error);
      },
    });
  }

  register(payload: RegisterInterface) {
    this.http.post<void>(ApiRoutes.Register, payload).subscribe({
      next: () => {
        this.router.navigateByUrl(PageRoutes.Login);
      },
      error: (error: any) => {
        this.errorHandler.handleError(error);
      },
    });
  }
}
