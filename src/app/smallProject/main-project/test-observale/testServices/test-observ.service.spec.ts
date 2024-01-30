import { TestBed } from '@angular/core/testing';

import { TestObservService } from './test-observ.service';

describe('TestObservService', () => {
  let service: TestObservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestObservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
