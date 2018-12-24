import { TestBed, inject } from '@angular/core/testing';

import { DefaultProductService } from './default-product.service';

describe('DefaultProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultProductService]
    });
  });

  it('should be created', inject([DefaultProductService], (service: DefaultProductService) => {
    expect(service).toBeTruthy();
  }));
});