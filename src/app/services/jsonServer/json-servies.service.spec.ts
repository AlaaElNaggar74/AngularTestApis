import { TestBed } from '@angular/core/testing';

import { JsonServiesService } from './json-servies.service';

describe('JsonServiesService', () => {
  let service: JsonServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
