import { CountryModule } from './country/country.module';
import { ContinentModule } from './continent/continent.module';
import { HomeModule } from './home/home.module';
import { RouttingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromStore from './store/store.reducer';
import { StoreEffects } from './store/store.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouttingModule,
    HttpClientModule,
    HomeModule,
    ContinentModule,
    CountryModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromStore.storeFeatureKey, fromStore.reducer),
    EffectsModule.forFeature([StoreEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
