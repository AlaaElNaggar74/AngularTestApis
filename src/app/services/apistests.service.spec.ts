import { TestBed } from '@angular/core/testing';

import { ApistestsService } from './apistests.service';

describe('ApistestsService', () => {
  let service: ApistestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
