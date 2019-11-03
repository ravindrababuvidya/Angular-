import { TestBed } from '@angular/core/testing';

import { FbauthservicesService } from './fbauthservices.service';

describe('FbauthservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbauthservicesService = TestBed.get(FbauthservicesService);
    expect(service).toBeTruthy();
  });
});
