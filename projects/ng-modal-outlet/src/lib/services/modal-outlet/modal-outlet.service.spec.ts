import { TestBed, inject } from '@angular/core/testing';

import { ModalOutletService } from './modal-outlet.service';

describe('ModalOutletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalOutletService]
    });
  });

  it('should be created', inject([ModalOutletService], (service: ModalOutletService) => {
    expect(service).toBeTruthy();
  }));
});
