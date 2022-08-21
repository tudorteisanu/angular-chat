import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponentsModule } from 'src/app/components/chat-components/chat-components.module';
import { BaseModule } from '../../components/base/base.module';
import { FormsModule } from '@angular/forms';
import { RoomsCreateComponent } from './rooms-create/rooms-create.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsItemComponent } from './rooms-item/rooms-item.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsListComponent,
  },
  {
    path: 'create',
    component: RoomsCreateComponent,
  },
  {
    path: ':id',
    component: RoomsItemComponent,
  },
];

@NgModule({
  declarations: [RoomsListComponent, RoomsItemComponent, RoomsCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChatComponentsModule,
    BaseModule,
    FormsModule,
  ],
})
export class RoomsModule {}
