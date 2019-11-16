import { Region, Country } from '@ecm/domain';
import { catchError, mapTo } from 'rxjs/operators';
import { ApiService } from './../services/api.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-blueprint-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinentComponent implements OnInit {

  code: string;
  region$: Observable<Region>;
  countries$: Observable<Country[]>;
  hasError$: Observable<boolean>;

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
