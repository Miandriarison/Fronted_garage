import { TestBed } from '@angular/core/testing';

import { PieceAdminService } from './piece-admin.service';

describe('PieceAdminService', () => {
  let service: PieceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
