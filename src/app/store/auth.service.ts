import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CredentialsInterface, LoginInterface } from 'src/ts/interfaces';
import { ApiRoutes } from 'src/ts/enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentialsEvent: BehaviorSubject<CredentialsInterface| null> =
    new BehaviorSubject<CredentialsInterface | null>(this.defaultCredentials);

  get defaultCredentials(): CredentialsInterface | null {
    if (localStorage.getItem('credentials')) {
      return JSON.parse(localStorage.getItem('credentials')!)
    }
    return  null
  }

  constructor(private http: HttpClient) {}

  login(payload: LoginInterface) {
    this.http.post<CredentialsInterface>(ApiRoutes.Login, payload).subscribe(
      (credentials: CredentialsInterface) => {
        localStorage.setItem('credentials', JSON.stringify(credentials));
        this.credentialsEvent.next(credentials);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
