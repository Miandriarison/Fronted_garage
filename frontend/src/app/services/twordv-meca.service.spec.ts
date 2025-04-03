import { TestBed } from '@angular/core/testing';

import { TwordvMecaService } from './twordv-meca.service';

describe('TwordvMecaService', () => {
  let service: TwordvMecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwordvMecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
