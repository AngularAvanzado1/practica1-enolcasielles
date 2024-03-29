import { catchError, mapTo } from 'rxjs/operators';
import { ApiService } from './../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Country } from '@ecm/domain';

@Component({
  selector: 'angular-blueprint-country',
  templateUrl: './country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {

  id: string;
  country$: Observable<Country>;
  hasError$: Observable<boolean>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.country$ = this.apiService.getCountry(this.id);
    this.hasError$ = this.country$.pipe(catchError(err => of(true)), mapTo(false));
  }

}
