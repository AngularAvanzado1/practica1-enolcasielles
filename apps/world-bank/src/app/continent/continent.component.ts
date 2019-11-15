import { Region } from '@ecm/domain';
import { catchError, mapTo } from 'rxjs/operators';
import { Country } from './../../../../../libs/shared/domain/src/lib/models/country';
import { ApiService } from './../services/api.service';
import { Continent } from './../../../../../libs/shared/domain/src/lib/models/continent';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-blueprint-continent',
  templateUrl: './continent.component.html',
  styles: []
})
export class ContinentComponent implements OnInit {

  private code: string;
  private region$: Observable<Region>;
  private countries$: Observable<Country[]>;
  private hasError$: Observable<boolean>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.code = route.snapshot.params['code'];
  }

  ngOnInit() {
    this.region$ = this.apiService.getRegion(this.code);
    this.region$.subscribe((region) => {
      console.log(region);
    })
    this.countries$ = this.apiService.getContinent(this.code);
    this.hasError$ = this.countries$.pipe(catchError(err => of(true)), mapTo(false));
  }

}
