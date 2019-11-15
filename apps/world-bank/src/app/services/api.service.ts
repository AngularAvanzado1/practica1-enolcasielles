import { Region, Country, Continent } from '@ecm/domain';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export const API_URL = "http://api.worldbank.org/v2";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private regions$: BehaviorSubject<Region[]>;
  private countriesByRegion: {[key: string]: Country[]};
  private countriesByCode: {[key: string]: Country};

  constructor(private http: HttpClient) {
    this.regions$ = new BehaviorSubject(null);
    this.countriesByRegion = {};
    this.countriesByCode = {};
  }

  public getRegions(): Observable<Region[]> {
    if(this.regions$.getValue() == null) this.http.get(API_URL + '/region/?format=json').pipe(
      map((res: any) => {
        try {
          const filterRegions = res[1].filter((regionJson) => regionJson.id !== "");
          return filterRegions.map((regionJson) => this.parseRegion(regionJson));
        } catch(e) {
          throw(e);
        }
      })
    ).subscribe((regions: Region[]) => {
      this.regions$.next(regions);
    }, (err) => {
      this.regions$.error(err);
    });
    return this.regions$.asObservable();
  }

  public getRegion(code: string): Observable<Region> {
    const regions = this.regions$.getValue();
    if(!regions) return of(null);
    else return of(regions.find((region: Region) => region.code === code));
  }

  public getContinent(code: string): Observable<Country[]> {
    if(this.countriesByRegion[code]) return of(this.countriesByRegion[code]);
    else {
      const countries$: BehaviorSubject<Country[]> = new BehaviorSubject(null);
      this.http.get(API_URL + `/region/${code}/country?per_page=1000&format=json`).pipe(
        map((res: any) => {
          try {
            return res[1].map((countryJson) => this.parseCountry(countryJson));
          } catch(e) {
            throw(e)
          }
        })
      ).subscribe((data: Country[]) => {
        this.countriesByRegion[code] = data;
        countries$.next(data);
      }, (err) => {
        countries$.error(err);
      });
      return countries$.asObservable();
    }
  }

  public getCountry(code: string): Observable<Country> {
    if(this.countriesByCode[code]) return of(this.countriesByCode[code]);
    else {
      const country$: BehaviorSubject<Country> = new BehaviorSubject(null);
      this.http.get(API_URL + `/country/${code}?format=json`).pipe(
        map((res: any) => {
          try {
            const countryObj: Country = this.parseCountry(res[1][0]);
            this.countriesByCode[code] = countryObj;
            return countryObj;
          } catch(e) {
            throw(e);
          }
        })
      ).subscribe((data) => {
        country$.next(data);
      }, (err) => {
        country$.error(err);
      });
      return country$;
    }
  }

  private parseRegion(regionJson): Region {
    return {
      code: regionJson['code'],
      iso2code: regionJson['iso2code'],
      name: regionJson['name']
    };
  }

  private parseCountry(countryJson): Country {
    return {
      id: countryJson['id'],
      name: countryJson['name'],
      capitalCity: countryJson['capitalCity'],
      latitude: parseFloat(countryJson['latitude']),
      longitude: parseFloat('longitude'),
      incomLevel: countryJson['incomLevel'] ? countryJson['incomLevel']['value'] : "-",
      lendingType: countryJson['lendingType'] ? countryJson['lendingType']['value'] : "-",
      region: {
        code: countryJson['region']['id'],
        iso2code: countryJson['region']['iso2code'],
        name: countryJson['region']['value']
      }
    }
  }


}
