import { RouterModule } from '@angular/router';
import { UiModule } from '@ecm/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';



@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ]
})
export class CountryModule { }
