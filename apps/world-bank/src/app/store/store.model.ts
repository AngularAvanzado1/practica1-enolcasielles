import { Region, Country } from '@ecm/domain';

export interface StoreModel {
  regions: Region[];
  regionsErr: any;
  selectedRegion: Region;
}
