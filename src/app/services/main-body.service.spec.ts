import { TestBed } from '@angular/core/testing';

import { MainBodyService } from './main-body.service';

describe('MainBodyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainBodyService = TestBed.get(MainBodyService);
    expect(service).toBeTruthy();
  });
});
