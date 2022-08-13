import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';



@NgModule({
  declarations: [
    ContentComponent,
    EmptyPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    EmptyPageComponent
  ]
})
export class BaseModule { }
