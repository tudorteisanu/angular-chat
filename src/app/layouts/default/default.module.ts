import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'rooms',
        loadChildren: () =>
          import('src/app/pages/rooms/rooms.module').then((m) => m.RoomsModule),
      },
      {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class DefaultModule {}
