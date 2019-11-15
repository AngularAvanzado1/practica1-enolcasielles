import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContinentComponent } from './continent/continent.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'region/:code',
    component: ContinentComponent
  },
  {
    path: 'country/:id',
    component: CountryComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class RouttingModule {}
