import { Component } from '@angular/core';
import { AuthService } from 'src/app/store/auth.service';
import { LoginInterface } from 'src/ts/interfaces';
import {PageRoutes} from "src/ts/enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: LoginInterface = {
    email: 'admin@example.com',
    password: '12345678',
  };

  constructor(private auth: AuthService) {}

  get registerUrl(): string {
    return PageRoutes.Register
  }

  login(): void {
    this.auth.login(this.form);
  }
}
