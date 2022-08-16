import { Component } from '@angular/core';
import {AuthService} from "src/app/store/auth.service";
import {RegisterInterface} from "src/ts/interfaces/auth";
import {PageRoutes} from "../../../../ts/enum";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form: RegisterInterface = {
    email: 'admin@example.com',
    password: '12345678',
    firstName: 'Joch',
    lastName: 'Doe'
  };

  constructor(private auth: AuthService) {}

  get loginUrl(): string {
    return PageRoutes.Login
  }


  register(): void {
    this.auth.register(this.form);
  }
}
