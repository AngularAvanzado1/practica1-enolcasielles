import { Observable } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('GIVEN: a ApiService', () => {
  describe('WHEN: the DataModule is compiled', () => {

    beforeEach(() =>
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      })
    );

    it('THEN: should be created', () => {
      const service: ApiService = TestBed.get(ApiService);
      expect(service).toBeTruthy();
    });


    it(`THEN: should return an observable when call 'getRegions()'`, () => {
      const service: ApiService = TestBed.get(ApiService);
      const regions$: Observable<any> = service.getRegions();
      expect(regions$).toBeInstanceOf(Observable);
    });

    it(`THEN: should return 'Welcome to api!' when call getRegions()`, () => {
      const service: ApiService = TestBed.get(ApiService);
      service.getRegions().subscribe((result) => {
        expect(result).toEqual({message: 'Welcome to api!'});
      });
      const httpMock = TestBed.get(HttpTestingController);
      const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json');
      req.flush({ message: 'Welcome to api!' });
      httpMock.verify();
    });

  })
});
