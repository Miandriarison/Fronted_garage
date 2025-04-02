import { TestBed } from '@angular/core/testing';

import { RdvClientService } from './rdv-client.service';

describe('RdvClientService', () => {
  let service: RdvClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdvClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
