import { CountryModule } from './country/country.module';
import { ContinentModule } from './continent/continent.module';
import { HomeModule } from './home/home.module';
import { RouttingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouttingModule,
    HttpClientModule,
    HomeModule,
    ContinentModule,
    CountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
