import { TestBed } from '@angular/core/testing';

import { CallingbackService } from './callingback.service';

describe('CallingbackService', () => {
  let service: CallingbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
