import { ApiService } from './../services/api.service';
import { Region, Country, Continent } from '@ecm/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-blueprint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private regions$: Observable<Region[]>;
  private hasError$: Observable<boolean>;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.regions$ = this.apiService.getRegions();
    this.hasError$ = this.regions$.pipe(catchError(err => of(true)), mapTo(false));
  }

  goRegion(region: Region) {
    this.router.navigate(['/region', region.code]);
  }

}
