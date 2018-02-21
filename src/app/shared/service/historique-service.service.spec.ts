import { TestBed, inject } from '@angular/core/testing';

import { HistoriqueServiceService } from './historique-service.service';

describe('HistoriqueServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriqueServiceService]
    });
  });

  it('should be created', inject([HistoriqueServiceService], (service: HistoriqueServiceService) => {
    expect(service).toBeTruthy();
  }));
});
