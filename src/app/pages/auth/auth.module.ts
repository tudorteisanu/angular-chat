import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseModule } from '../../components/base/base.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BaseModule],
})
export class AuthModule {}
