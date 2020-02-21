import { TestBed } from '@angular/core/testing';

import { SsoDynamicService } from './sso-dynamic.service';

describe('SsoDynamicService', () => {
  let service: SsoDynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsoDynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
