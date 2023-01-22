import { TestBed } from '@angular/core/testing';

import { AlumniGetterService } from './alumni-getter.service';

describe('AlumniGetterService', () => {
  let service: AlumniGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
