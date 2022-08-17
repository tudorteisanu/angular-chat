import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CredentialsInterface, LoginInterface } from 'src/ts/interfaces';
import {ApiRoutes, PageRoutes} from 'src/ts/enum';
import { BehaviorSubject } from 'rxjs';
import {RegisterInterface} from "src/ts/interfaces/auth";
import {Router} from "@angular/router";

const CREDENTIALS_KEY = 'credentials'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credentialsEvent: BehaviorSubject<CredentialsInterface| null> =
    new BehaviorSubject<CredentialsInterface | null>(this.defaultCredentials);

  get defaultCredentials(): CredentialsInterface | null {
    if (localStorage.getItem(CREDENTIALS_KEY)) {
      return JSON.parse(localStorage.getItem(CREDENTIALS_KEY)!)
    }
    return  null
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(payload: LoginInterface) {
    this.http.post<CredentialsInterface>(ApiRoutes.Login, payload).subscribe(
      {
        next: (credentials: CredentialsInterface) => {
          localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
          this.credentialsEvent.next(credentials);
          this.router.navigateByUrl(PageRoutes.Chat)
        },
        error: (error: HttpErrorResponse) =>  console.log(error)
      }
    );
  }

  register(payload: RegisterInterface) {
    this.http.post<void>(ApiRoutes.Register, payload).subscribe(() => {
      this.router.navigateByUrl(PageRoutes.Login)
    });
  }
}
