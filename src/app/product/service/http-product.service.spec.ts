import { TestBed, inject } from '@angular/core/testing';

import { HttpProductService } from './http-product.service';

describe('HttpProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProductService]
    });
  });

  it('should be created', inject([HttpProductService], (service: HttpProductService) => {
    expect(service).toBeTruthy();
  }));
});