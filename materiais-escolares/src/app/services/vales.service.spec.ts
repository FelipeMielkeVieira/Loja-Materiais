import { TestBed } from '@angular/core/testing';

import { ValesService } from './vales.service';

describe('ValesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValesService = TestBed.get(ValesService);
    expect(service).toBeTruthy();
  });
});
