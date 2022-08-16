import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CredentialsInterface, LoginInterface } from 'src/ts/interfaces';
import {ApiRoutes, PageRoutes} from 'src/ts/enum';
import { BehaviorSubject } from 'rxjs';
import {RegisterInterface} from "../../ts/interfaces/auth";
import {Router} from "@angular/router";

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

  constructor(private http: HttpClient, private router: Router) {}

  login(payload: LoginInterface) {
    this.http.post<CredentialsInterface>(ApiRoutes.Login, payload).subscribe(
      (credentials: CredentialsInterface) => {
        localStorage.setItem('credentials', JSON.stringify(credentials));
        this.credentialsEvent.next(credentials);
        this.router.navigateByUrl(PageRoutes.Chat)
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  register(payload: RegisterInterface) {
    this.http.post<void>(ApiRoutes.Register, payload).subscribe(() => {
      this.router.navigateByUrl(PageRoutes.Login)
    });
  }
}
