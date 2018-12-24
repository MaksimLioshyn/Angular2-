import { TestBed, inject } from '@angular/core/testing';

import { ConfigOptionsModelService } from './config-options.model.service';

describe('ConfigOptionsModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigOptionsModelService]
    });
  });

  it('should be created', inject([ConfigOptionsModelService], (service: ConfigOptionsModelService) => {
    expect(service).toBeTruthy();
  }));
});