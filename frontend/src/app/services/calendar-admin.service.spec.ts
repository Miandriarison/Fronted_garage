import { TestBed } from '@angular/core/testing';

import { CalendarAdminService } from './calendar-admin.service';

describe('CalendarAdminService', () => {
  let service: CalendarAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
