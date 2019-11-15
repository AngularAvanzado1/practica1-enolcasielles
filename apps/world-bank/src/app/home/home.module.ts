import { UiModule } from '@ecm/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class HomeModule { }
