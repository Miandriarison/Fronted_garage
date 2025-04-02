import { TestBed } from '@angular/core/testing';

import { InscriptionAdminService } from './inscription-admin.service';

describe('InscriptionAdminService', () => {
  let service: InscriptionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
