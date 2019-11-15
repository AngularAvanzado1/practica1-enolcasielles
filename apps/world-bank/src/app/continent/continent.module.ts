import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentComponent } from './continent.component';



@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContinentModule { }
