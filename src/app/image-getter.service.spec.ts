import { TestBed } from '@angular/core/testing';

import { ImageGetterService } from './image-getter.service';

describe('ImageGetterService', () => {
  let service: ImageGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
