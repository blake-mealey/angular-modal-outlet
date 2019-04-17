import { TestBed, inject } from '@angular/core/testing';

import { AngularModalOutletService } from './angular-modal-outlet.service';

describe('AngularModalOutletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularModalOutletService]
    });
  });

  it('should be created', inject([AngularModalOutletService], (service: AngularModalOutletService) => {
    expect(service).toBeTruthy();
  }));
});
