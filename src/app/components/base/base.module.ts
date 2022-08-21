import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { BaseBtnComponent } from './base-btn/base-btn.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ContentComponent,
    EmptyPageComponent,
    BaseBtnComponent,
    BaseInputComponent,
    ModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContentComponent,
    EmptyPageComponent,
    BaseBtnComponent,
    ModalComponent,
  ],
})
export class BaseModule {}
