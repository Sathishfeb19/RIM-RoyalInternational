import { TestBed } from '@angular/core/testing';

import { RimservicesService } from './rimservices.service';

describe('RimservicesService', () => {
  let service: RimservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RimservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
