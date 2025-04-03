import { TestBed } from '@angular/core/testing';

import { OnerdvMecaService } from './onerdv-meca.service';

describe('OnerdvMecaService', () => {
  let service: OnerdvMecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnerdvMecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
