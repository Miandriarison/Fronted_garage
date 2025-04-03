import { TestBed } from '@angular/core/testing';

import { Details2rdvService } from './details-2rdv.service';

describe('Details2rdvService', () => {
  let service: Details2rdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Details2rdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
