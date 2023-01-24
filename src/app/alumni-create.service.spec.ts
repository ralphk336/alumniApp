import { TestBed } from '@angular/core/testing';

import { AlumniCreateService } from './alumni-create.service';

describe('AlumniCreateService', () => {
  let service: AlumniCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
