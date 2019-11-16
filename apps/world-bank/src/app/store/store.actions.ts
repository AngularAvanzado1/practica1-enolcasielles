import { Region } from '@ecm/domain';
import { createAction, props } from '@ngrx/store';

export const loadRegions = createAction(
  '[Store] Load Regions'
);

export const loadRegionsSuccess = createAction(
  '[Store] Load Region Success',
  props<{ regions: Region[] }>()
);

export const loadRegionsError = createAction(
  '[Store] Load Region Error',
)

export const selectRegion = createAction(
  '[Store] Select Region',
  props<{region: Region}>()
)




