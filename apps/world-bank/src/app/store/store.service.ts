import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Region, Country } from '@ecm/domain';
import { StoreModel } from './store.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StoreActions from './store.actions';
import * as StoreSelectors from './store.selectors';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<StoreModel>) {}

  public loadRegions() {
    this.store.dispatch(StoreActions.loadRegions());
  }

  public selectRegion(region: Region) {
    this.store.dispatch(
      StoreActions.selectRegion(
        {region: { ...region }}
      )
    )
  }

  public getRegions(): Observable<Region[]> {
    return this.store.select(StoreSelectors.getRegions).pipe(
      map((data) => {
        if(data.err) throw(data.err);
        else return data.regions
      })
    )
  }

}
