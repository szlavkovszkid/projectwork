import { TestBed } from '@angular/core/testing';

import { BasicconfigService } from './basicconfig.service';

describe('BasicconfigService', () => {
  let service: BasicconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
