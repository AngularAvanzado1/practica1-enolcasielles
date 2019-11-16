import { StoreModel } from './store.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';

export const storeFeatureKey = 'store';

export interface State  {
  state: StoreModel
}

export const initialState: State = {
  state: {
    regions: [],
    regionsErr: null,
    selectedRegion: null
  }
};

const storeReducer = createReducer(

  initialState,

  on(StoreActions.selectRegion, (state, { region }) => {
    return {
      ...state,
      state: {
        ...state.state,
        selectedRegion: { ...region }
      }
    };
  }),

  on(StoreActions.loadRegionsSuccess, (state, { regions }) => {
    return {
      ...state,
      state: {
        ...state.state,
        regionErr: null,
        regions: regions != null ? [ ...regions ] : []
      }
    }
  }),

  on(StoreActions.loadRegionsError, (state, {}) => {
    return {
      ...state,
      state: {
        ...state.state,
        regions: [],
        regionsErr: {}
      }
    };
  }),

);

export function reducer(state: State | undefined, action: Action) {
  return storeReducer(state, action);
}
