import { TestBed } from '@angular/core/testing';

import { StorServicesService } from './stor-services.service';

describe('StorServicesService', () => {
  let service: StorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
