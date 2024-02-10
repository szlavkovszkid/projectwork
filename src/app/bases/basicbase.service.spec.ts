import { TestBed } from '@angular/core/testing';

import { BasicbaseService } from './basicbase.service';

describe('BasicbaseService', () => {
  let service: BasicbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
