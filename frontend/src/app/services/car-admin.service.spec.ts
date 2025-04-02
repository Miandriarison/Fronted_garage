import { TestBed } from '@angular/core/testing';

import { CarAdminService } from './car-admin.service';

describe('CarAdminService', () => {
  let service: CarAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
