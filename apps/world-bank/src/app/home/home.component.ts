import { StoreService } from './../store/store.service';
import { ApiService } from './../services/api.service';
import { Region, Country, Continent } from '@ecm/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-blueprint-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  regions$: Observable<Region[]>;
  hasError$: Observable<boolean>;

  constructor(private storeService: StoreService, private router: Router) {
    this.storeService.loadRegions();
  }

  ngOnInit() {
    this.regions$ = this.storeService.getRegions();
    this.hasError$ = this.regions$.pipe(catchError(err => of(true)), mapTo(false));
  }

  goRegion(region: Region) {
    this.storeService.selectRegion(region);
    this.router.navigate(['/region', region.code]);
  }

}
