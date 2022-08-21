import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/pages/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
