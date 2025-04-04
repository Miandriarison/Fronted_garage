import { TestBed } from '@angular/core/testing';

import { ClientInscriptionService } from './client-inscription.service';

describe('ClientInscriptionService', () => {
  let service: ClientInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
