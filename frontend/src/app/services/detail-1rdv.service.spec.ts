import { TestBed } from '@angular/core/testing';

import { Detail1rdvService } from './detail-1rdv.service';

describe('Detail1rdvService', () => {
  let service: Detail1rdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Detail1rdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
