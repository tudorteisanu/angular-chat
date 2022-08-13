import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutModule} from "../../components/layout/layout.module";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('src/app/pages/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ]
})
export class DefaultModule { }
