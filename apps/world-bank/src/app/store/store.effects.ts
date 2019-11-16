import { Region } from './../../../../../libs/shared/domain/src/lib/models/region';
import { Action } from '@ngrx/store';
import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, catchError } from 'rxjs/operators';
import { EMPTY, of, BehaviorSubject } from 'rxjs';

import * as StoreActions from './store.actions';


@Injectable()
export class StoreEffects {


  loadRegions$ = createEffect(() => this.actions$.pipe(
    ofType(StoreActions.loadRegions),
    concatMap(() => {
      return this.apiService.getRegions().pipe(
        map((regions: Region[]) => StoreActions.loadRegionsSuccess({regions: regions})),
        catchError((err) => of(StoreActions.loadRegionsError()))
      );
    })
  ));


  constructor(private actions$: Actions, private apiService: ApiService) {}

}
