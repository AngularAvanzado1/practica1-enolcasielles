import { createFeatureSelector, createSelector } from '@ngrx/store';
import { storeFeatureKey, State } from './store.reducer';

export const getStoreState = createFeatureSelector<State>(
  storeFeatureKey
);

export const getSelectedRegion = createSelector(
  getStoreState,
  (state: State) => state.state.selectedRegion
);

export const getRegions = createSelector(
  getStoreState,
  (state: State) => {
    return {
      regions: state.state.regions,
      err: state.state.regionsErr
    }
  }
);
