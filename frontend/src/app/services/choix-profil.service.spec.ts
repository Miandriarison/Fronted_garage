import { TestBed } from '@angular/core/testing';

import { ChoixProfilService } from './choix-profil.service';

describe('ChoixProfilService', () => {
  let service: ChoixProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoixProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
