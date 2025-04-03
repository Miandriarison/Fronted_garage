import { TestBed } from '@angular/core/testing';

import { DetailsHistoriqueClientService } from './details-historique-client.service';

describe('DetailsHistoriqueClientService', () => {
  let service: DetailsHistoriqueClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsHistoriqueClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
