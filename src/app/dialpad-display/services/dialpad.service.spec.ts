import { TestBed } from '@angular/core/testing';

import { DialpadService } from './dialpad.service';

describe('DialpadService', () => {
  let service: DialpadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialpadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
