import { Region } from './region';
export interface Country {
  name: string;
  id: string,
  region: Region,
  capitalCity: string,
  longitude: number,
  latitude: number,
  incomLevel: string,
  lendingType: string
}
