import { TestBed } from '@angular/core/testing';

import { XyService } from './xy.service';

describe('XyService', () => {
  let service: XyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
