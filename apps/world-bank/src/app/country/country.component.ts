import { catchError, mapTo } from 'rxjs/operators';
import { ApiService } from './../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Country } from '@ecm/domain';

@Component({
  selector: 'angular-blueprint-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent implements OnInit {

  private id: string;
  private country$: Observable<Country>;
  private hasError$: Observable<boolean>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.country$ = this.apiService.getCountry(this.id);
    this.hasError$ = this.country$.pipe(catchError(err => of(true)), mapTo(false));
  }

}
