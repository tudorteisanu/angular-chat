import { Component } from '@angular/core';
import { AuthService } from '../../../store/auth.service';
import { LoginInterface } from '../../../../ts/interfaces';

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

  login(): void {
    this.auth.login(this.form);
  }
}
