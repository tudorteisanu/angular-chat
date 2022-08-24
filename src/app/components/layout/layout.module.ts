import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from '@components/layout/alert/alert.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoaderComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, AlertComponent, LoaderComponent],
})
export class LayoutModule {}
