import { TestBed, inject } from '@angular/core/testing';

import { MarsApiPhotosService } from './mars-api-photos.service';

describe('MarsApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsApiPhotosService]
    });
  });

  it('should be created', inject([MarsApiPhotosService], (service: MarsApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
