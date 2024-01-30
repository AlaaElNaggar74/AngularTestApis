import { TestBed } from '@angular/core/testing';

import { ProServicesService } from './pro-services.service';

describe('ProServicesService', () => {
  let service: ProServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
