import { TestBed } from '@angular/core/testing';

import { HttpResponseInterceptService } from './http-response-intercept.service';

describe('HttpResponseInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpResponseInterceptService = TestBed.get(HttpResponseInterceptService);
    expect(service).toBeTruthy();
  });
});
