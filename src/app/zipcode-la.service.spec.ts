import { TestBed } from '@angular/core/testing';

import { ZipcodeLAService } from './zipcode-la.service';

describe('ZipcodeLAService', () => {
  let service: ZipcodeLAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipcodeLAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
