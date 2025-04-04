import { TestBed } from '@angular/core/testing';

import { MecaLoginService } from './meca-login.service';

describe('MecaLoginService', () => {
  let service: MecaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
